let myUser = window.prompt("Entrez votre nom");
const myName = document.getElementById("myName");
if(myUser == ""){
  myUser = window.prompt("Entrez votre nom");
  myName.textContent = "[ANONYME]";
  myName.setAttribute("title", "Veuillez actualiser la page pour changer de nom")
}
else if(myUser == "Master"){
  myName.textContent = "Joël";
  myName.setAttribute("title", myUser)
}
else if(myUser == "Joël"){
  myName.textContent = "Master";
  myName.setAttribute("title", myUser)
}
else if(myUser == "Djumi"){
  myName.textContent = 'Him';
  myName.setAttribute("title", myUser)
}
else if(myUser == "Bradley"){
  myName.textContent = 'Him';
  myName.setAttribute("title", myUser)
}
else if(myUser == "Maroun"){
  myName.textContent = 'Dumbass';
  myName.setAttribute("title", myUser)
}
else{
  myName.textContent = myUser;
  myName.setAttribute("title", myUser);
};