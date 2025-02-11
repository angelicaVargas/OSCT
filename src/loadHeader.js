// Function to load the header
function loadHeader() {
    fetch('/src/components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const headerElement = document.getElementById('header');
            if (headerElement) {
                headerElement.innerHTML = data;
            }
            // Set the active tab based on the current page
            const pathParts = window.location.pathname.split('/');
            const lastPart = pathParts.pop();
            const currentPage = lastPart ? lastPart.split('.').shift() : 'index';
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('data-page') === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to load the header
loadHeader();