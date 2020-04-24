// Navbar
function nav(inputURL) {
    $.getJSON(inputURL, function (data) {
        var output = "";
        for (x in data) {

            if (data[x].link === window.location.href || data[x].link + "/" === window.location.href) {
                //if it is not root page, but right link, make active
                console.log(data[x].link);
                output += "<li class=\"nav-item active\"><a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name + "<span class=\"sr-only\">(current)</span>";
            } else {
                output += "<li class=\"nav-item \"><a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name
            }
            output += "</a></li>";
        }
        document.getElementById("nav").innerHTML += output;
    });
}
function body(inputURL) {
    $.getJSON(inputURL, function (data) {
        var output = "";
        for (x in data) {
            console.log(data[x].text)
            output += "<div class=\"containter\">";
            output += data[x].text
            output += "</div>"
        }
        document.getElementById("body").innerHTML+=output;
    });
}
nav("http://127.0.0.1:5500/nav.json");
// body("http://127.0.0.1:5500/body.json") // not sure if necessary