// --------------------------------------------------------------------FUNCTION TO LOAD LOGIN--------------------------------------------------------------------
function loadLogin() {
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = '';
    }
    
    const contentElement = document.getElementById('content');
    if (contentElement) {
        contentElement.innerHTML = '';
    }

fetch('/src/components/login.html')
    .then(response => response.text())
    .then(data => 
        {
        console.log('Loading Login Page.......................'); //console log output for status
        const loginElement = document.getElementById('login-page');
        if (loginElement) 
            {
            loginElement.innerHTML = data;
            }
        console.log('Login Page Loaded!'); //console log output for status
        //---------------------------------------------------------Event Listener for SignUp Button--------------------------------------------------------------------
        const signUpButton = document.getElementById('signUp-btn');
        if(signUpButton)
            {
                console.log('Sign Up Event Listener Added!'); //console log output for status
                signUpButton.addEventListener('click', function(event)
                {
                    event.preventDefault();
                    const page = signUpButton.getAttribute('data-page');
                    console.log('signup page:', page);
                    //TODO: Function call to load sign up page onto the login page
                    loadSignUp(page);
                });
            }
        //---------------------------------------------------------Event Listener for Submit Button--------------------------------------------------------------------
        document.getElementById('login').addEventListener('submit', function(event)
        {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Username:', username); //console log output for error checking
            console.log('Password:', password); //console log output for error checking
            if (loginElement) {
                loginElement.innerHTML = '';
            }
            //---------------------------------------------------------User Type Conditions--------------------------------------------------------------------
            let userType = null;
            let homePage = null;
            let headerPage = null;
            if (username === "patient") {
                userType = "patient";
                homePage = "/src/components/patient_user/home.html";
                headerPage = "/src/components/patient_user/header_patient.html";
            }
            else if (username === "personnel") {
                userType = "personnel";
                homePage = "/src/components/personnel_user/home.html";
                headerPage = "/src/components/personnel_user/header_personnel.html";
            }
            else if (username === "admin") {
                userType = "admin";
                homePage = "/src/components/admin_user/home.html";
                headerPage = "/src/components/admin_user/header_admin.html";
            }
            else {
                console.log("Input is not valid");
                return;
            }
            // store user type in sessionStorage for later use
            sessionStorage.setItem('userType', userType);

            // load initial content based on user
            loadInitContent(homePage, headerPage);
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
    console.log('Loading Initial Page:', page); //console log output for error checking
    console.log(''); //console log output for status
    if(headerElement?.innerHTML.trim() === "" || !headerElement)
        {
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
// --------------------------------------------------------------------FUNCTION TO LOAD SIGN UP PAGE CONTENT--------------------------------------------------------------------
//TODO: Make Function to load sign up page onto the login page
function loadSignUp(page)
{
    fetch(page)
    .then(response => response.text())
    .then(data => 
    {
        const loginElement = document.getElementById('login-page');
        loginElement.innerHTML = '';
        console.log('Loading SignUp Page.......................'); //console log output for status
        const signUpElement = document.getElementById('signUp-page');
        if (signUpElement) 
            {
            signUpElement.innerHTML = data;
            }
        console.log('Sign In Page Loaded!'); //console log output for status
        const signInButton = document.getElementById('signIn-btn');
        if(signInButton)
            {
                console.log('Sign In Event Listener Added!'); //console log output for status
                signInButton.addEventListener('click', function(event)
                {
                    event.preventDefault();
                    //TODO: Function call to load sign up page onto the login page
                    signUpElement.innerHTML = '';
                    console.log('Loading Sign In Page.......................');
                    loadLogin();
                });
            }
    })
    .catch(error => 
        {
            console.error('Error when attempting to load signup page:', error); //console log error for error handling
        });
}
loadLogin();

