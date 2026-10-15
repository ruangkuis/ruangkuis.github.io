// Replace this with the Web App URL after deploying Code.gs.
const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzK47FU8Rb1OtJi_nCfwTqWHiMfme3CJLKexwjlalOM8FwXvQfEGckSj1OkzTMKDolkDw/exec";

function sendQuizResultToGoogleSheets(payload) {
    return fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
    });
}
