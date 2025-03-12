// --------------------------------------------------------------------FUNCTION TO LOAD LOGIN--------------------------------------------------------------------
function loadLogin() 
{
fetch('/src/components/login.html')
    .then(response => response.text())
    .then(data => 
        {
        const loginElement = document.getElementById('login-page');
        if (loginElement) 
            {
            loginElement.innerHTML = data;
            }
        //---------------------------------------------------------Event Listener for Submit Button--------------------------------------------------------------------
        document.getElementById('login').addEventListener('submit', function(event)
        {
            event.preventDefault(); //prevent page refreshing
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Username:', username); //console log output for error checking
            console.log('Password:', password); //console log output for error checking
            if (loginElement) {
                loginElement.innerHTML = '';
            }
            //---------------------------------------------------------User Type Conditions--------------------------------------------------------------------
            if (username === "patient") {
                loadInitContent('/src/components/patient_user/home.html', '/src/components/patient_user/header_patient.html');
            }
            else if (username === "personnel") {
                loadInitContent('/src/components/personnel_user/home.html', '/src/components/personnel_user/header_personnel.html');
            }
            else if (username === "admin") {
                loadInitContent('/src/components/admin_user/home.html', '/src/components/admin_user/header_admin.html');
            }
            else {
                console.log("Input is not valid");
            }
        });
        })
    .catch(error => 
        {
        console.error('Error when attempting to load login form:', error);
        });
}

// --------------------------------------------------------------------FUNCTION TO LOAD INITIAL CONTENT--------------------------------------------------------------------
function loadInitContent(page, userHeader) 
{
    const contentElement = document.getElementById('content');
    const headerElement = document.getElementById('header');
    console.log('We are loading the initial page:', page); //console log output for error checking
    console.log('our path for the header file:', userHeader); //console log output for error checking
    if(headerElement.innerHTML.trim() === "")
        {
            console.log('Header Does not Exist:', userHeader); //console log output for error checking
            loadContent(userHeader);
        }
    fetch(page)
    .then(response => response.text())
    .then(data => 
    {
        if (contentElement) 
            {
                contentElement.innerHTML = data;
            }
    })
    .catch(error => 
    {
        console.error('Error when attempting to load initial content:', error); //console log error for error handling
    });
}
loadLogin(); //initial call of program functionality

