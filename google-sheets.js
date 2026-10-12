// Replace this with the Web App URL after deploying Code.gs.
const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZDT8ZR7VGAgbiYteMIiwH8d78jBtC5rd64D87pu3F7ln3fhYQAMZgLpHWa-wAV1HS/exec";

function sendQuizResultToGoogleSheets(payload) {
    return fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
    });
}
