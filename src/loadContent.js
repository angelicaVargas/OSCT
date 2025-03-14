// --------------------------------------------------------------------FUNCTION TO LOAD HEADER--------------------------------------------------------------------
function loadContent(userHeader) 
{
    //-----------------------------------------------------------------------Loads Header-------------------------------------------------------------------------
    const headerElement = document.getElementById('header');
    if (headerElement.innerHTML.trim() !== "")
        {
            console.log('Header already Exists:', userHeader); //console log output for error checking
            return;
        }
        console.log('Header Does not Exist 2:', userHeader); //console log output for error checking
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
            console.log('We loaded the header'); //console log output for error checking
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
    console.log('We are adding the listeners'); //console log output for error checking
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
        const profileButton = document.getElementById('profile-button');
        if(profileButton)
            {
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
        button.addEventListener('click', function(event)
        {
            if (event.target.classList.contains('btn-page')) 
                {
                    console.log("Button clicked:", event.target); //console log output for error checking
                    const page = event.target.getAttribute('data-page');
                    console.log('user button page: ', page); //console log output for error checking
                    fetchContent(page);
                    updateActiveTab(page);
                    updateHistory(page);
                }
        });
}

//----------------------------------------------------------------FUNCTION TO FETCH AND LOAD CONTENT-------------------------------------------------------------
function fetchContent(page) 
{
    console.log('We are getting the content'); //console log output for error checking
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
        console.error('There was a problem with the fetch operation:', error); //console log error for error handling
    });
}

//---------------------------------------------------------------FUNCTION TO UPDATE ACTIVE TAB STATUS--------------------------------------------------------------------
function updateActiveTab(page)
{
    console.log('We are updating the active tab'); //console log output for error checking
    document.querySelectorAll('.nav-link').forEach(link => 
    {
        const fetchedPage = getLinkPage(link); //call function to get the page from nav link
        console.log('fetchedpage:', fetchedPage);  //console log output for error checking
        console.log('currentPage:', page);  //console log output for error checking
            if (fetchedPage === page) 
                {
                link.classList.add('active');
                } 
            else 
                {
                link.classList.remove('active');
                }
    });
}

//---------------------------------------------------------------FUNCTION TO UPDATE HISTORY ATTRIBUTE--------------------------------------------------------------------
function updateHistory(page)
{
    console.log('We updating the history'); //console log output for error checking
    history.pushState({ page: page},'', `/${page}.html`);
}

//------------------------------------------------------------------FUNCTION TO GET CURRENT PAGE--------------------------------------------------------------------
function getPage()
{
    console.log('We are getting the page'); //console log output for error checking
    const pathParts = window.location.pathname.split('/');
    const lastPart = pathParts.pop();
    return lastPart ? lastPart.split('.').shift() : 'home';
}

//------------------------------------------------------------------FUNCTION TO GET PAGE FROM LINK--------------------------------------------------------------------
function getLinkPage(link)
{
    console.log('We are getting the link page'); //console log output for error checking
    const pathParts = link.getAttribute('data-page').split('/');
    const lastPart = pathParts.pop();
    return lastPart.split('.').shift();
}

//------------------------------------------------------------------FUNCTION TO RENDER TABLES--------------------------------------------------------------------
function renderTable(page, tableID) 
{
    console.log('We rendering the table'); //console log output for error checking
    fetch(`/src/components/${page}.html`)
    .then(response => response.text())
    .then(htmlString => 
    {
        const tempData = document.createElement('div');
        const tempData.innerHTML = htmlString;
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