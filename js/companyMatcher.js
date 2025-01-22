const CompanyMatcher = {
    async analyzeSimilarity() {
        const { ziCompany, sfCompany } = UiManager.getInputValues();
        
        if (!ziCompany || !sfCompany) {
            alert('Please enter both company names');
            return;
        }

        UiManager.showLoading(true);

        const similarity = SimilarityService.calculateSimilarity(ziCompany, sfCompany);
        
        const [ziUrls, sfUrls] = await Promise.all([
            UrlService.generateUrls(ziCompany),
            UrlService.generateUrls(sfCompany)
        ]);

        const domainSimilarity = SimilarityService.calculateSimilarity(
            new URL(ziUrls[0].url).hostname,
            new URL(sfUrls[0].url).hostname
        );

        UiManager.updateResults(similarity, domainSimilarity, ziUrls, sfUrls);
        UiManager.showLoading(false);
    }
};