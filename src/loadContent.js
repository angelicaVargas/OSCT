// --------------------------------------------------------------------FUNCTION TO LOAD HEADER--------------------------------------------------------------------
function loadContent(userHeader) 
{
    //-----------------------------------------------------------------------Loads Header-------------------------------------------------------------------------
    const headerElement = document.getElementById('header');
    if (headerElement.innerHTML.trim() !== "")
        {
            return;
        }
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
        console.log('Loading Header.......................'); //console log output for status
        const headerElement = document.getElementById('header');
        if (headerElement) 
            {
            headerElement.innerHTML = data;
            }
        console.log('Header Loaded!'); //console log output for error checking
        console.log(''); //console log output for status
        //------------------------------------------------------Sets Active Tab & Begins Event Listening-------------------------------------------------------------------------
        const currentPage = (history.state && history.state.page) || getPage(); //page = history if state history != null, otherwise = output from getPage
        updateActiveTab(currentPage);
        eventListeners();
    }) 
    .catch(error => 
        {
            console.error('There was a problem with the fetch operation:', error); //console log error for error handling
        });
}

//-------------------------------------------------------------------FUNCTION FOR EVENT LISTENERS---------------------------------------------------------------------------------
function eventListeners()
{
    console.log('.......................Adding Listeners.......................'); //console log output for status
    console.log(''); //console log output for status
    console.log('Adding Navigation Event Listeners.......................'); //console log output for status
    //---------------------------------------------------------Event Listener for Page Navigation Links--------------------------------------------------------------------
    document.querySelectorAll('.nav-link').forEach(link => 
        {
            link.addEventListener('click', function(event) 
            {
                event.preventDefault();
                const page = link.getAttribute('data-page');
                fetchContent(page);
                updateActiveTab(page);
                updateHistory(page);
            });
        });

        //------------------------------------------------------Event Listener for 'Profile' Page Button-------------------------------------------------------------
        console.log('Adding Profile Event Listener.......................'); //console log output for status
        const profileButton = document.getElementById('profile-button');
        if(profileButton)
            {
                console.log('Profile Event Listener Added!'); //console log output for status
                profileButton.addEventListener('click', function(event)
                {
                    event.preventDefault();
                    const page = profileButton.getAttribute('data-page');
                    console.log('profile page', page); //console log output for error checking
                    fetchContent(page);
                    updateActiveTab(page);
                    updateHistory(page);
                });
            }

        //-----------------------------------------------------Event Listener for Admin 'Users' Page Buttons-------------------------------------------------------------
        console.log('Adding Users List Button Event Listeners.......................'); //console log output for status
        document.querySelectorAll('.table-btn').forEach(tableButton =>
        {
            tableButton.addEventListener('click', function(event)
            {
                event.preventDefault();
                const table = tableButton.getAttribute('target');
                const page = tableButton.getAttribute('data-page');
                renderTable(page, table)
            });
        });
        console.log('Listeners Added!'); //console log output for status 
        console.log(''); //console log output for status
}

//----------------------------------------------------------------FUNCTION TO FETCH AND LOAD CONTENT-------------------------------------------------------------
function fetchContent(page) 
{
    console.log('Fetching Content.......................'); //console log output for status
    const contentElement = document.getElementById('content');
    fetch(`/src/components/${page}.html`)
    .then(response => response.text())
    .then(data => 
    {
        if (contentElement) 
            {
                contentElement.innerHTML = data;
                console.log('Content Loaded!'); //console log output for status
                contentElement.classList.remove('loading');
            }
    })
    .catch(error => 
    {
        console.error('There was a problem with the fetch operation:', error); //console log error for error handling
    });
}

//---------------------------------------------------------------FUNCTION TO UPDATE ACTIVE TAB STATUS--------------------------------------------------------------------
function updateActiveTab(page)
{
    console.log('.......................Updating Active Tab.......................'); //console log output for status
    console.log(''); //console log output for status
    document.querySelectorAll('.nav-link').forEach(link => 
    {
        const fetchedPage = getLinkPage(link); //call function to get the page from nav link
        console.log('fetchedpage:', fetchedPage);  //console log output for error checking
        console.log('currentPage:', page);  //console log output for error checking
            if (fetchedPage === page) 
                {
                console.log('fetchedPage === currentPage');  //console log output for error checking
                console.log(''); //console log output for status
                link.classList.add('active');
                } 
            else 
                {
                console.log('fetchedPage != currentPage');  //console log output for error checking
                console.log(''); //console log output for status
                link.classList.remove('active');
                }
    });
    console.log('Active Tab Updated!'); //console log output for status
    console.log(''); //console log output for status
}

//---------------------------------------------------------------FUNCTION TO UPDATE HISTORY ATTRIBUTE--------------------------------------------------------------------
function updateHistory(page)
{
    console.log('.......................Updating Page History.......................'); //console log output for status
    history.pushState({ page: page},'', `/${page}.html`);
    console.log('Page History Updated!'); //console log output for status
}

//------------------------------------------------------------------FUNCTION TO GET CURRENT PAGE--------------------------------------------------------------------
function getPage() //TODO: Fix this function to return the path with the folder that the html page is in instead of just the html file name
{
    console.log('Getting Window Page.......................'); //console log output for status
    const pathParts = window.location.pathname.split('/');
    const lastPart = pathParts.pop();
    console.log('Done!'); //console log output for status
    return lastPart ? lastPart.split('.').shift() : 'home';
}

//------------------------------------------------------------------FUNCTION TO GET PAGE FROM LINK--------------------------------------------------------------------
function getLinkPage(link)
{
    console.log('Getting Path for Active Tab.......................'); //console log output for status
    const linkPath = link.getAttribute('data-page');
    console.log('Path:', linkPath); //console log output for status
    return linkPath;
}

//------------------------------------------------------------------FUNCTION TO RENDER TABLES--------------------------------------------------------------------
function renderTable(page, tableID) 
{
    console.log('.......................Rendering Table.......................'); //console log output for status
    const tableElement = document.getElementsById('table');
    const tempData = document.createElement('div');
    fetch(`/src/components/${page}.html`)
    .then(response => response.text())
    .then(data => 
    {
        tempData.innerHTML = data;
        const tableData = tempData.querySelector(tableID);
        if (tableElement) 
            {
            tableElement.innerHTML = tableData.innerHTML;
            tableElement.classList.remove('loading');
            }
        else 
            {
            console.error('Requested table not found:', tableID); //console log error for error handling
            }
        console.log('Table Rendered!'); //console log output for status
    })
    .catch(error => 
    {
        console.error('There was a problem with the fetch operation:', error); //console log error for error handling
        if (tableElement) 
            {
            tableElement.classList.remove('loading');
            }
    });
} 