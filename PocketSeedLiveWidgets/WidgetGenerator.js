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
            content.style.color = 'blue'; // Specific color for the paragraph text

            const img = document.createElement('img');
            img.src = 'https://agkdesigns.github.io/PocketSeedLiveWidgets/PocketSeedLogo.png'; // Replace with your image URL
            img.alt = 'Descriptive text'; // Alternative text for the image
            img.style.width = '100px'; // Optional: Set the width of the image
            img.style.height = 'auto'; // Optional: Set the height to auto to maintain aspect ratio



            widget.appendChild(title);
            widget.appendChild(content);
            widget.appendChild(img);

            document.body.appendChild(widget);
        })
        .catch(error => console.error('Error loading the data:', error));
    })
}
