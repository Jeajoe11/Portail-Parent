let myUser = window.prompt("Entrez votre nom");
const myName = document.getElementById("myName");
const myName2 = document.getElementById("myName2");
const Container2 = document.getElementById("Container2");

while(myUser === "" || myUser === null){
  myUser = window.prompt("Entrez votre nom");
  myName.textContent = "[ANONYME]".setAttribute("title", "Veuillez actualiser la page pour changer de nom");

  myName2.textContent = "[ANONYME]";
  myName2.setAttribute("title", "Veuillez actualiser la page pour changer de nom");
};
if(!myUser === "" || myUser === null){
  Container2.setAttribute("data-inserted", "");

}
else if(myUser === "Créateur"){
  myName.textContent = "Joël";
  myName.setAttribute("title", myUser).setAttribute("capital", "");

  myName2.textContent = "Joël";
  myName2.setAttribute("title", myUser).setAttribute("capital", "");

  Container2.setAttribute("data-inserted", "");
}
else{
  myName.textContent = myUser
  myName.setAttribute("title", myUser).setAttribute("capital", "");

  myName2.textContent = myUser.setAttribute("title", myUser).setAttribute("capital", "");

  Container2.setAttribute("data-inserted", "");
};