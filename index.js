const secretsList = document.getElementById('secretsList');

// Fetch secrets from GitHub Secrets
const authHost = process.env.AUTH_HOST;
const authUsername = process.env.AUTH_UN;
const authToken = process.env.AUTHTOK;
const authTarget = process.env.AUTH_TO;

// Display secrets on the web page
secretsList.innerHTML += `<li>Authentication Host: ${authHost}</li>`;
secretsList.innerHTML += `<li>Authentication Username: ${authUsername}</li>`;
secretsList.innerHTML += `<li>Authentication Token: ${authToken}</li>`;
secretsList.innerHTML += `<li>Authentication Target: ${authTarget}</li>`;
