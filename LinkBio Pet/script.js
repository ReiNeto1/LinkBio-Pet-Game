// Quando o botão é clicado, mostra ou esconde a bio
document.getElementById("showBioBtn").addEventListener("click", function () {
    var bioContainer = document.getElementById("bioContainer");
    if (bioContainer.style.display === "none") {
        bioContainer.style.display = "block";
        document.getElementById("showBioBtn").textContent = "Esconder Bio";
    } else {
        bioContainer.style.display = "none";
        document.getElementById("showBioBtn").textContent = "Mostrar Bio";
    }
});
