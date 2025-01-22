const UrlService = {
    async generateUrls(companyName) {
        const cleanName = StringUtils.cleanForUrl(companyName);
        const urlTemplates = UrlUtils.getUrlTemplates();
        const urls = [];
        
        for (const template of urlTemplates) {
            for (const suffix of template.suffix) {
                const url = `${template.prefix}${cleanName}${suffix}`;
                const isValid = await UrlUtils.checkUrl(url);
                urls.push({ url, isValid });
            }
        }
        
        return urls;
    }
};