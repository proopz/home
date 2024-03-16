const secretsList = document.getElementById('secretsList');

// Display secrets on the web page
secretsList.innerHTML += `<li>Authentication Host: ${authHost}</li>`;
secretsList.innerHTML += `<li>Authentication Username: ${authUsername}</li>`;
secretsList.innerHTML += `<li>Authentication Token: ${authToken}</li>`;
secretsList.innerHTML += `<li>Authentication Target: ${authTarget}</li>`;

