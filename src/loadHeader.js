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

            
            //add active button for profile page?


            // Set the active tab based on the current page
            const pathParts = window.location.pathname.split('/');
            const lastPart = pathParts.pop();
            const currentPage = lastPart ? lastPart.split('.').shift() : 'home';
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('data-page') === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });


            //Add listeners for profile page to fix issue?


            // Add event listeners to navigation links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const page = link.getAttribute('data-page');
                    loadContent(page);
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    link.classList.add('active');
                    history.pushState(null, '', `/${page}.html`);
                });
            });

            // Load the initial content for the home page after the header is loaded
            loadContent('home');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to load content
function loadContent(page) {
    const contentElement = document.getElementById('content');
    if (contentElement) {
        contentElement.classList.add('loading');
    }
    fetch(`/src/components/${page}.html`)
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
}

// Call the function to load the header
loadHeader();