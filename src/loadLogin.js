function loadLogin() {
    fetch('/src/components/login.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
    }
function loadHome(){
    //TODO: Add listener for submit button
    const contentElement = document.getElementById('content');
    if (contentElement) {
        contentElement.classList.add('loading');
    }

    //TODO:add conditions here, one for parent, one for admin and one for data collector

    // Parent Home Page
    fetch(`/src/components/home.html`)
        .then(response => response.text())
        .then(data => {
            if (contentElement) {
                contentElement.innerHTML = data;
                contentElement.classList.remove('loading');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            if (contentElement) {
                contentElement.classList.remove('loading');
            }
        });
    // Admin Home Page

    // Data Collector Home Page
}
//TODO: need to set up conditions for type of users being logged in. 
    //For now I will make a placeholder and usd the words parent, admin and collector for testing navigation and user pages
loadLogin();

