let lastname = document.getElementById("lastname");
let firstname = document.getElementById("firstname");
let email = document.getElementById("email");
const form = document.querySelector("form");
let checkbox = document.getElementById("consentement");
let radio = document.getElementsByName("btn-radio");
let error = "";
let message = document.getElementById("message");

const validLastname = (lastname) => {
  if (lastname === "") {
    return "Le nom est obligatoire\n";
  }
  return "";
};

const validFirstname = (firstname) => {
  if (firstname === "") {
    return "Le prénom est obligatoire\n";
  }
  return "";
};

const validEmail = (email) => {
  if (email === "") {
    return "L'email est obligatoire\n";
  }
  return "";
};

// Traitement de la newsletter
checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    alert("Vous acceptez de recevoir la newsletter");
    for (item of radio) {
      if (item.value == "oui") {
        item.checked = true;
      }
    }
  } else {
    for (item of radio) {
      item.checked = item.value === "non";
    }
  }
});

// Traitement de la soumission du formulaire
form.addEventListener("submit", (event) => {
  error = "";
  error += validEmail(email.value);
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].name == "lastname") {
      error += validLastname(form.elements[i].value);
    } else if (form.elements[i].name == "firstname") {
      error += validFirstname(form.elements[i].value);
    }
  }
  if (error !== "") {
    alert(error);
    event.preventDefault();
  }
});
