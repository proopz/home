// Access GitHub Secrets
const AUTH_HOST = process.env.AUTH_HOST;
const AUTH_UN = process.env.AUTH_UN;
const AUTHTOK = process.env.AUTHTOK;
const AUTH_TO = process.env.AUTH_TO;

// Check if secrets are fetched (for debugging)
console.log("Authentication Host:", AUTH_HOST);
console.log("Authentication Username:", AUTH_UN);
console.log("Authentication Token:", AUTHTOK);
console.log("Authentication Target:", AUTH_TO);

// Update HTML content
document.getElementById('authHost').textContent = AUTH_HOST || "Not available";
document.getElementById('authUn').textContent = AUTH_UN || "Not available";
document.getElementById('authTok').textContent = AUTHTOK || "Not available";
document.getElementById('authTo').textContent = AUTH_TO || "Not available";
