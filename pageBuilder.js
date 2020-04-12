
// Navbar
function nav(inputURL) {
    $.getJSON(inputURL, function (data) {
        var output = "";
        for (x in data) {
            output += "<li class=\"nav-item\">\n";
            output += "<a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name
            console.log(data[x].link + "/");
            if (data[x].link + "/" === window.location.href) {
                console.log("HI");
            }
            if (window.location.href === "https://team6036.github.io/" && data[x].link + "/" === window.location.href) {
                // if this is root page, and it is root link, active
                output += "<span class=\"sr-only\">(current)</span>"
            } else if (data[x].link === window.location.href) {
                //if it is not root page, but right link, make active
                output += "<span class=\"sr-only\">(current)</span>"
            }
            output += "</a>";
            output += "</li>";
        }
        document.getElementById("nav").innerHTML = output;
    });
}
nav("https://team6036.github.io/nav.json");
