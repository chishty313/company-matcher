const StringUtils = {
    normalizeCompanyName(str) {
        return str
            .toLowerCase()
            .replace(/\b(technologies|technology)\b/gi, 'tech')
            .replace(/\b(incorporated|corporation|inc|corp|llc|ltd|company)\b/gi, '')
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    },

    cleanForUrl(str) {
        return str.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
    }
};