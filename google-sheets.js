// Replace this with the Web App URL after deploying Code.gs.
const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby85NOrlfnkimoIyKvKUUqfITKsoxzNY2izpk4563WM5rdlyQTPNsmmZMETH6TIdLSS/exec";

function sendQuizResultToGoogleSheets(payload) {
    return fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
    });
}
