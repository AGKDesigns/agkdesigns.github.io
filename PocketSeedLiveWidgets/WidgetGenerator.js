<script>
function loadWidget(companyId) {
    document.addEventListener("DOMContentLoaded", function() {
        const url = 'https://agkdesigns.github.io/PocketSeedLiveWidgets/ImpactDataFile.json';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const companyData = data.companies.find(company => company.id === companyId);
            if (!companyData) {
                console.error('Company data not found');
                return;
            }

            const widget = document.createElement('div');
            widget.style.padding = '10px';
            widget.style.margin = '10px';
            widget.style.border = '1px solid #ccc';
            widget.style.borderRadius = '5px';
            widget.style.backgroundColor = '#f9f9f9';
            widget.style.color = '#333';
            widget.style.fontFamily = 'Arial, sans-serif';

            const title = document.createElement('h2');
            title.textContent = companyData.widgetData.title;
            const content = document.createElement('p');
            content.textContent = companyData.widgetData.content;

            widget.appendChild(title);
            widget.appendChild(content);

            document.body.appendChild(widget);
        })
        .catch(error => console.error('Error loading the data:', error));
    });
}
</script>