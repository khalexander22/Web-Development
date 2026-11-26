const formulaire = document.forms["inscription"];
const champNom = formulaire.elements["nom"];

const message = document.getElementById("message");
const recapitulatif = document.getElementById("recapitulatif");

// Soumission du formulaire
formulaire.onsubmit = function (event) {
  event.preventDefault();

  // Effacer les résultats précédents
  message.textContent = "";
  recapitulatif.textContent = "";

  // Récupérer les valeurs
  const nom = champNom.value.trim();
  const profession = formulaire.elements["profession"].value;

  const sexeSelectionne = formulaire.querySelector(
    'input[name="sexe"]:checked'
  );

  const casesLangues = formulaire.querySelectorAll(
    'input[name="langue"]'
  );

  const languesSelectionnees = [];

  for (const caseLangue of casesLangues) {
    if (caseLangue.checked) {
      languesSelectionnees.push(caseLangue.value);
    }
  }

  // Afficher uniquement la première erreur détectée
  if (nom.length < 3) {
    message.textContent =
      "Le nom doit contenir au moins trois caractères.";
    champNom.focus();
    return;
  }

  if (profession === "") {
    message.textContent = "Veuillez choisir une profession.";
    return;
  }

  if (sexeSelectionne === null) {
    message.textContent = "Veuillez sélectionner un sexe.";
    return;
  }

  if (languesSelectionnees.length === 0) {
    message.textContent = "Veuillez cocher au moins une langue.";
    return;
  }

  // Créer l'objet lorsque les données sont valides
  const inscription = {
    nom: nom,
    profession: profession,
    sexe: sexeSelectionne.value,
    langues: languesSelectionnees.join(", "),

    presenter: function () {
      return "Nom : " + this.nom + "\n" +
             "Profession : " + this.profession + "\n" +
             "Sexe : " + this.sexe + "\n" +
             "Langues : " + this.langues;
    }
  };

  // Afficher le récapitulatif
  recapitulatif.textContent = inscription.presenter();
};

// Réinitialisation du formulaire
formulaire.onreset = function () {
  message.textContent = "";
  recapitulatif.textContent = "";
};