function textBox() {
  let firstName = prompt("Entrez votre prénom :");
  console.log(firstName);
  let lastName = prompt("Entrez votre nom :");
  console.log(lastName);
  let yearsOld = parseInt(prompt("Entrez votre age (avec un nombre):"));
  console.log(yearsOld);
  alert(
    "HEY ! On m'avait prévenu que c'était vous, " +
      firstName +
      " ! EuuH... ooops..., sorry... , désolé..., je veux dire ... notre bon roi  " +
      lastName +
      " ! Cela fait déjà " +
      yearsOld +
      " ans que vous regnez en maitre, juste et bon, dans notre contrée"
  );
}
textBox();
