const secretsList = document.getElementById('secretsList');

// Fetch secrets from GitHub Secrets
const authHost = "${{ secrets.AUTH_HOST }}";
const authUsername = "${{ secrets.AUTH_UN }}";
const authToken = "${{ secrets.AUTHTOK }}";
const authTarget = "${{ secrets.AUTH_TO }}";

// Display secrets on the web page
secretsList.innerHTML += `<li>Authentication Host: ${authHost}</li>`;
secretsList.innerHTML += `<li>Authentication Username: ${authUsername}</li>`;
secretsList.innerHTML += `<li>Authentication Token: ${authToken}</li>`;
secretsList.innerHTML += `<li>Authentication Target: ${authTarget}</li>`;
