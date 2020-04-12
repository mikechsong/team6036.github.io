
// Navbar
function nav(inputURL) {
        $.getJSON(inputURL,function(data){
            var output = "";
            for (x in data) {
                output += "<li class=\"nav-item\">\n";
                output += "<a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name
                if(data[x].link===window.location.href){
                    output+="<span class=\"sr-only\">(current)</span>"
                }
                output+="</a>";
                output += "</li>";
            }
            document.getElementById("nav").innerHTML=output;
        });
}
document.getElementById("nav").innerHTML = nav("https://team6036.github.io/nav.json");
