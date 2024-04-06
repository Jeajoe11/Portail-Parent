let myUser = window.prompt("Enter Your Name");
const myName = document.getElementById("myName");
if(myUser == ""){
  myUser = window.prompt("Enter Your Name");
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