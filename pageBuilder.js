
// Navbar
function nav(inputURL) {
        $.getJSON(inputURL,function(data){
            var output = "";
            for (x in data) {
                output += "<li class=\"nav-item\">\n";
                output += "<a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name
                console.log(window.location.href);
                if("https://"+data[x].link===window.location.protocol+window.location.host+window.location.pathname){
                    output+="<span class=\"sr-only\">(current)</span>"
                }
                output+="</a>";
                output += "</li>";
            }
            document.getElementById("nav").innerHTML=output;
        });
}
nav("https://team6036.github.io/nav.json");
