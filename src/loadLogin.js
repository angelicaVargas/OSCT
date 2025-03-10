function loadLogin() 
{
//response for fetch request of the html file data
fetch('/src/components/login.html')
    .then(response => response.text())
    .then(data => 
        {
        //id location where the html gets placed
        const loginElement = document.getElementById('login-page');
        if (loginElement) 
            {
            loginElement.innerHTML = data;
            }
        //listener for the submit button
        document.getElementById('login').addEventListener('submit', function(event)
        {
            //prevent page refreshing 
            event.preventDefault();
            //users unsername and password inputs
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            //test for retrivial of inputs
            console.log('Username:', username);
            console.log('Password:', password);
            if (loginElement) {
                loginElement.innerHTML = '';
            }
            //conditions for checking which type of user is trying to log in
            //sends the home page and header page path associated with that user to loadInitContent
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

// ------------------------Function to load intial content--------------------------------------------------
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
                console.log('Maybe we need content load call here?:', page); //console log output for error checking
                contentElement.innerHTML = data;
            }
    })
    .catch(error => 
    {
        console.error('Error when attempting to load initial content:', error);
    });
}
loadLogin();

