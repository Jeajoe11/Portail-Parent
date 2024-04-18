let myUser = window.prompt("Entrez votre nom");
const myName = document.getElementById("myName");
const myName2 = document.getElementById("myName2");
const Container2 = document.getElementById("Container2");

while(myUser === "" || myUser === null){
  myUser = window.prompt("Entrez votre nom");
  myName.textContent = "[ANONYME]";
  myName.setAttribute("title", "Veuillez actualiser la page pour changer de nom");

  myName2.textContent = "[ANONYME]";
  myName2.setAttribute("title", "Veuillez actualiser la page pour changer de nom");
};
if(!myUser === "" || myUser === null){
  Container2.setAttribute("data-inserted");
}
else if(myUser === "Créateur"){
  myName.textContent = "Joël";
  myName.setAttribute("title", myUser);

  myName2.textContent = "Joël";
  myName2.setAttribute("title", myUser);
}
else if(myUser === "Joël" || myUser === "joël" || myUser === "Joel" || myUser === "joel"){
  myName.textContent = "Créateur";
  myName.setAttribute("title", myUser);

  myName2.textContent = "Créateur";
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "Djumi"){
  myName.textContent = 'Him';
  myName.setAttribute("title", myUser);

  myName2.textContent = 'Him';
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "Bradley"){
  myName.textContent = 'Him';
  myName.setAttribute("title", myUser);

  myName2.textContent = 'Him';
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "Maroun"){
  myName.textContent = 'Main Man';
  myName.setAttribute("title", myUser);

  myName2.textContent = 'Main Man';
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "Ahmed"){
  myName.textContent = `My Man`;
  myName.setAttribute("title", myUser);

  myName2.textContent = `My Man`;
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "/smile-man"){
  myName.textContent = `😁`;
  myName.setAttribute("title", myUser);

  myName2.textContent = `😁`;
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "/rizz-man"){
  myName.textContent = `😉`;
  myName.setAttribute("title", myUser);

  myName2.textContent = `😉`;
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
}
else if(myUser === "GAY JOEL"){
  myName.textContent = `GAY DJUMI`;
  myName.setAttribute("title", `DJUMI IS GAY!`);

  myName2.textContent = `GAY DJUMI`;
  myName2.setAttribute("title", `DJUMI IS GAY`);

  Container2.setAttribute("data-inserted",)
}
else{
  myName.textContent = myUser;
  myName.setAttribute("title", myUser);

  myName2.textContent = myUser;
  myName2.setAttribute("title", myUser);

  Container2.setAttribute("data-inserted",)
};