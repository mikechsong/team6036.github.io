String.prototype.splice = function (start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};

// Navbar
function nav() {
    var html = "";
    $.get('site/nav.html', function (data) {
        document.getElementById("nav").innerHTML = data;
    });
    $.getJSON('site/nav.json', function (data) {
        output = "";
        for (x in data) {
            if (data[x].link === window.location.href || data[x].link + "/" === window.location.href) {
                //if it is not root page, but right link, make active
                output += "<li class=\"nav-item active\"><a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name + "<span class=\"sr-only\">(current)</span>";
            } else {
                output += "<li class=\"nav-item \"><a class=\"nav-link\" href=\"" + data[x].link + "\">" + data[x].name;
            }
            output += "</a></li>";
        }
        document.getElementById("elements").innerHTML = output;
    });

}

function contact() {
    $.get('site/contact.html', function (data) {
        document.getElementById("contactsection").innerHTML += data;
    });
}

$(document).ready(function() {   //same as: $(function() { 
     nav();
});

nav();
contact();

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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}