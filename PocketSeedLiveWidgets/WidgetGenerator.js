function loadWidget(companyId) {
    document.addEventListener("DOMContentLoaded", function() {
        // Dynamically load the CSS file
        loadCSS('widget-styles.css');

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
            widget.className = 'widget';

            const anchor = document.createElement('a');
            anchor.href = 'https://www.google.com';  // Set the URL where you want users to be directed when they click the widget.
            anchor.style.textDecoration = 'none'; // Removes underline from all text within the anchor.
            anchor.target = '_blank';  // Opens the link in a new tab.


            const imgContainer = document.createElement('div');
            imgContainer.className = 'imgContainer';

            const textContainer = document.createElement('div');
            textContainer.className = 'textContainer';

            const title = document.createElement('h2');
            title.textContent = companyData.widgetData.title;
            title.className = 'title';

            const content = document.createElement('p');
            content.textContent = companyData.widgetData.content;

            const info = document.createElement('p');
            info.textContent = companyData.widgetData.info;

            const img = document.createElement('img');
            img.src = 'https://agkdesigns.github.io/PocketSeedLiveWidgets/PocketSeedLogo.png'; 
            img.alt = 'Descriptive text';

            // assemble the widget
            widget.appendChild(anchor);
            widget.appendChild(imgContainer);
            widget.appendChild(textContainer);
            imgContainer.appendChild(img);
            textContainer.appendChild(title);
            textContainer.appendChild(content);
            textContainer.appendChild(info);
            
            
            //Add entire widget to page
            document.body.appendChild(widget);
            
        })
        .catch(error => console.error('Error loading the data:', error));
    });
}

function loadCSS(href) {
    const link = document.createElement('link');
    link.href = href;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}
