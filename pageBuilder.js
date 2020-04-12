function getText(url) {
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

// Navbar
function nav(inputURL) {
    var inputJSON = JSON.parse(getText(inputURL));

    var output = "";
    for (x in inputJSON) {
        console.log(inputJSON);
        console.log()
        output += "<li class=\"nav-item\">\n";
        output += "<a class=\"nav-link\" href=\"" + inputJSON[x].link + "\">" + inputJSON[x].name + "</a>";
        output += "</li>";
    }

    return output;
}
document.getElementById("nav").innerHTML = nav("https://6036.github.io/nav.html");
