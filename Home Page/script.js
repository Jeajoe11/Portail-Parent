let myUser = window.prompt("Entrez votre nom");
const myName = document.getElementById("myName");
while(myUser === "" || myUser === null){
  myUser = window.prompt("Entrez votre nom");
  myName.textContent = "[ANONYME]";
  myName.setAttribute("title", "Veuillez actualiser la page pour changer de nom")
};
if(myUser === "Créateur"){
  myName.textContent = "Joël";
  myName.setAttribute("title", myUser)
}
else if(myUser === "Joël" || myUser === "joël" || myUser === "Joel" || myUser === "joel"){
  myName.textContent = "Créateur";
  myName.setAttribute("title", myUser)
}
else if(myUser === "Djumi"){
  myName.textContent = 'Him';
  myName.setAttribute("title", myUser)
}
else if(myUser === "Bradley"){
  myName.textContent = 'Him';
  myName.setAttribute("title", myUser)
}
else if(myUser === "Maroun"){
  myName.textContent = 'Main Man';
  myName.setAttribute("title", myUser)
}
else if(myUser === "Ahmed"){
  myName.textContent = `Ramadan`;
  myName.setAttribute("title", myUser)
}
else if(myUser === "/smile-man"){
  myName.textContent = `😁`;
  myName.setAttribute("title", myUser)
}
else if(myUser === "/rizz-man"){
  myName.textContent = `😉`;
  myName.setAttribute("title", myUser)
}
else if(myUser === "GAY JOEL"){
  myName.textContent = `GAY DJUMI`;
  myName.setAttribute("title", `DJUMI IS GAY!`)
}
else{
  myName.textContent = myUser;
  myName.setAttribute("title", myUser);
};