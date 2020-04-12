
// Navbar
function nav(inputURL) {
    $.getJSON(inputURL, function (data) {
        var output = "";
        for (x in data) {

            if (data[x].link === window.location.href || data[x].link + "/" === window.location.href) {
                //if it is not root page, but right link, make active
                output += "<li class=\"nav-item active\"><a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name + "<span class=\"sr-only\">(current)</span>";
            } else {
                output += "<li class=\"nav-item \"><a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name
            }
            output += "</a></li>";
        }
        document.getElementById("nav").innerHTML = output;
    });
}
nav("https://team6036.github.io/nav.json");
