// Access GitHub Secrets
const AUTH_HOST = process.env.AUTH_HOST;
const AUTH_UN = process.env.AUTH_UN;
const AUTHTOK = process.env.AUTHTOK;
const AUTH_TO = process.env.AUTH_TO;

// Update HTML content
document.getElementById('authHost').textContent = AUTH_HOST;
document.getElementById('authUn').textContent = AUTH_UN;
document.getElementById('authTok').textContent = AUTHTOK;
document.getElementById('authTo').textContent = AUTH_TO;
