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
nav("http://127.0.0.1:5500/nav.json");


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}