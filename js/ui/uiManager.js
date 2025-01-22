const UiManager = {
    getInputValues() {
        return {
            ziCompany: document.getElementById('ziCompany').value,
            sfCompany: document.getElementById('sfCompany').value
        };
    },

    showLoading(show) {
        document.getElementById('loading').style.display = show ? 'block' : 'none';
        document.getElementById('results').style.display = show ? 'none' : 'block';
    },

    createUrlHtml(urlObj) {
        const statusClass = urlObj.isValid ? 'valid' : 'invalid';
        return `
            <div>
                <span class="url-status ${statusClass}"></span>
                <a href="${urlObj.url}" target="_blank">${urlObj.url}</a>
            </div>
        `;
    },

    updateResults(similarity, domainSimilarity, ziUrls, sfUrls) {
        document.getElementById('nameSimilarity').textContent = 
            `Company Name Similarity: ${similarity}%`;
        document.getElementById('domainSimilarity').textContent = 
            `Domain Similarity: ${domainSimilarity}%`;

        document.getElementById('ziUrls').innerHTML = ziUrls
            .map(this.createUrlHtml)
            .join('');
        document.getElementById('sfUrls').innerHTML = sfUrls
            .map(this.createUrlHtml)
            .join('');
    }
};