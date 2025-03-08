// -----------------Function to load the header-----------------
function loadHeader(userHeader) 
{
//response for fetch request of the html file data
fetch(userHeader)
    .then(response => 
        {
        if (!response.ok) 
            {
            throw new Error('Network response was not ok ' + response.statusText);
            }
        return response.text();
        })
    .then(data => 
        {
        const headerElement = document.getElementById('header');
        if (headerElement) 
            {
            headerElement.innerHTML = data;
            }
        // Set the active tab based on the current page by searching through all elements with the nav link class
        const pathParts = window.location.pathname.split('/');
        const lastPart = pathParts.pop();
        const currentPage = lastPart ? lastPart.split('.').shift() : 'home';
        document.querySelectorAll('.nav-link').forEach(link => 
            {
            //TODO: Simplify this process into a separate function call. 
            //TODO: Fix bug with active bar bugging out when navigating and switching accounts
            const pathParts = link.getAttribute('data-page').split('/');
            const lastPart = pathParts.pop();
            const fetchedPage = lastPart.split('.').shift();
            console.log('fetchedpage:', fetchedPage);  //using for error checking
            console.log('currentPage:', currentPage); //using for error checking
                if (fetchedPage === currentPage) 
                    {
                    link.classList.add('active');
                    } 
                else 
                    {
                    link.classList.remove('active');
                    }
            });
        // Event listeners to navigation links
        document.querySelectorAll('.nav-link').forEach(link => 
            {
            link.addEventListener('click', function(event) 
                {
                event.preventDefault();
                const page = link.getAttribute('data-page');
                loadContent(page);
                document.querySelectorAll('.nav-link').forEach(link => 
                    {
                    link.classList.remove('active');
                    });
                link.classList.add('active');
                history.pushState(null, '', `/${page}.html`);
                });
            });
        // Event listeners for profile button
        const profileButton = document.getElementById('profile-button');
        if(profileButton){
            profileButton.addEventListener('click', function(event)
                {
                    event.preventDefault();
                    const page = profileButton.getAttribute('data-page');
                    console.log('profile page', page)
                    loadContent(page);
                    document.querySelectorAll('.nav-link').forEach(link => 
                        {
                        link.classList.remove('active');
                        });
                    history.pushState(null, '', `/${page}.html`);
                });
            }
        // Event listeners for users page buttons
        // TODO:change this to load data chunks instead of html pages
        const usersButton = document.getElementById('users-button');
        if(usersButton){
            usersButton.addEventListener('click', function(event)
                {
                    event.preventDefault();
                    const page = usersButton.getAttribute('data-page');
                    console.log('users page', page)
                    loadContent(page);
                    document.querySelectorAll('.nav-link').forEach(link => 
                        {
                        link.classList.remove('active');
                        });
                    history.pushState(null, '', `/${page}.html`);
                });
            }
        })
    .catch(error => 
        {
        console.error('There was a problem with the fetch operation:', error);
        });
}

//--------------------Function to load content---------------------
function loadContent(page) 
{
const contentElement = document.getElementById('content');
//fetch content for requested page
fetch(`/src/components/${page}.html`)
    .then(response => response.text())
    .then(data => 
        {
        if (contentElement) 
            {
            contentElement.innerHTML = data;
            contentElement.classList.remove('loading');
            }
        })
    .catch(error => 
        {
        console.error('There was a problem with the fetch operation:', error);
        if (contentElement) 
            {
            contentElement.classList.remove('loading');
            }
        });
}
//TODO: Make another function to handle loading in certain class groups one html file to existing current page