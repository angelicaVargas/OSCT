function loadLogin() {
    fetch('/src/components/login.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        }) //TODO: duplicate this for loadIntContnet
        .then(data => {
            const loginElement = document.getElementById('logIn');
            if (loginElement) {
                loginElement.innerHTML = data;
            }
    });
    //TODO: Add listener for submit button labeled as ID login
    document.getElementById('login').addEventListener('submit', function(event){
        event.preventDefault();
        //initializes a variable to hold the username and password from the form input 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username == "patient") {
            loadInitContent();
        }
        else if (username == "employee") {
            loadContent('/src/components/carePersonel_users/home.html');
        }
        else if (username == "admin") {
            loadContent('/src/components/admin_users/home.html');
        }
        else {
            console.log("Input is not valid");
        }
    });
}
// Function to load content
function loadInitContent() {
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
}
//TODO: need to set up conditions for type of users being logged in. 
    //For now I will make a placeholder and usd the words parent, admin and collector for testing navigation and user pages
loadLogin();

