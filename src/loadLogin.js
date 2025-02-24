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
            //conditions for checking which type of user is trying to log in
            if (loginElement) {
                loginElement.innerHTML = '';
            }
            if (username === "patient") {
                loadInitContent('home');
                //TODO: loadHeader(); //make it so content and header load exactly at the same time
            }
            else if (username === "employee") {
                loadContent('/src/components/carePersonel_users/home.html');
            }
            else if (username === "admin") {
                loadContent('/src/components/admin_users/home.html');
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

// ------------------------Function to load content--------------------------------------------------
function loadInitContent(page) 
{
const contentElement = document.getElementById('content');
//test for page being loaded
console.log('Loading page:', page);
fetch(`/src/components/${page}.html`)
    .then(response => response.text())
    .then(data => 
        {
        if (contentElement) 
            {
            loadHeader();
            contentElement.innerHTML = data;
            }
        })
    .catch(error => 
        {
        console.error('Error when attempting to load initial content:', error);
        });
}
loadLogin();

