function photoloader(){
  var xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://photoslibrary.googleapis.com/v1/albums", true); 
xhr.onload = function (e) { 
if (xhr.readyState === 4) { 
if (xhr.status === 200) { 
alert(this.responseText); 
  console.log(this.responseText);
} else { 
console.log(this.statusText):
//handle error status 
} 
} 
}; 
xhr.onerror = function (e) { 
console.error(xhr.statusText); 
}; 
xhr.setRequestHeader("Authorization", "721616495193-dnga1n0ggro6efodmsephuos1065l0h5.apps.googleusercontent.com")
xhr.send(null); 
}

photoloader();
