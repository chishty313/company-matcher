const SimilarityService = {
    calculateLevenshteinDistance(a, b) {
        const matrix = Array(b.length + 1).fill().map(() => Array(a.length + 1).fill(0));
        
        for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
        
        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1,
                    matrix[j - 1][i - 1] + substitutionCost
                );
            }
        }
        
        return 1 - (matrix[b.length][a.length] / Math.max(a.length, b.length));
    },

    calculateSimilarity(str1, str2) {
        const clean1 = StringUtils.normalizeCompanyName(str1);
        const clean2 = StringUtils.normalizeCompanyName(str2);
        
        const similarity = this.calculateLevenshteinDistance(clean1, clean2) * 100;
        return similarity.toFixed(2);
    }
};