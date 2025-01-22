const UrlUtils = {
    async checkUrl(url) {
        try {
            const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
            return response.ok;
        } catch (error) {
            return false;
        }
    },

    getUrlTemplates() {
        return [
            { prefix: 'https://www.', suffix: ['.com', '.co', '.io', '.net'] },
            { prefix: 'https://www.linkedin.com/company/', suffix: [''] },
            { prefix: 'https://twitter.com/', suffix: [''] },
            { prefix: 'https://www.crunchbase.com/organization/', suffix: [''] },
            { prefix: 'https://github.com/', suffix: [''] }
        ];
    }
};