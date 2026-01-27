document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let erreur = document.getElementById("erreur");

    if (nom === "" || email === "" || message === "") {
        erreur.textContent = "Veuillez remplir tous les champs.";
        erreur.style.color = "red";
    } else {
        erreur.textContent = "Message envoyé avec succès !";
        erreur.style.color = "green";

      
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        
        setTimeout(function() {
            erreur.textContent = "";
        }, 5000);
    }
});