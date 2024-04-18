let myUser = window.prompt("Entrez votre nom");
const myName = document.getElementById("myName");
const myName2 = document.getElementById("myName2");
const Container2 = document.getElementById("Container2");
const ExitBtn = document.querySelectorAll(".exitBtn");

ExitBtn.onclick = function() {
  // Check if the browser supports the exit() method (modern browsers)
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { // Safari
      document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
  } else if (window.close) { // Close the window/tab if exitFullscreen is not supported
      window.close();
  } else {
      window.alert("Fullscreen and window close not supported.");
  }
};
while(myUser === "" || myUser === null){
  myUser = window.prompt("Entrez votre nom");
  myName.textContent = "[ANONYME]";
  myName.setAttribute("title", "Veuillez actualiser la page pour changer de nom");

  myName2.textContent = "[ANONYME]";
  myName2.setAttribute("title", "Veuillez actualiser la page pour changer de nom");
};
if(!myUser === "" || myUser === null){
  Container2.setAttribute("data-inserted", "");
}
else if(myUser === "Créateur"){
  myName.textContent = "Joël";
  myName.setAttribute("title", myUser);

  myName2.textContent = "Joël";
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted", "");
}
else{
  myName.textContent = myUser;
  myName.setAttribute("title", myUser);

  myName2.textContent = myUser;
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted", "");
};