// Function to get URL parameters by name
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Extract the parameters from the URL
const msg = getParameterByName('msg');
const error = getParameterByName('error');
const reloadlink = getParameterByName('reloadlink');
const subtext = getParameterByName('subtext');
const subtext2 = getParameterByName('subtext2');

// Insert the parameters into the HTML
document.getElementById('msg').innerText = msg || 'No message available';
document.getElementById('error').innerText = error || 'No error reported';
document.getElementById('reloadlink').href = reloadlink || '#';
document.getElementById('reloadlink').innerText = 'Reload' || 'No link';
document.getElementById('subtext').innerText = subtext || '';
document.getElementById('subtext2').innerText = subtext2 || '';
