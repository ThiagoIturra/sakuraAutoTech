const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const notFound = document.getElementById("notFound");
const gridContainer = document.querySelector(".line-card");

searchInput.addEventListener("input", filterCards);

function filterCards() {
    const searchText = searchInput.value.toLowerCase();
    let found = false;

    cards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "grid";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (found) {
        notFound.style.display = "none";
        gridContainer.style.display = "grid";
    } else {
        notFound.style.display = "grid";
        gridContainer.style.display = "flex";
        gridContainer.style.justifyContent = "center";
        gridContainer.style.alignItems = "center";
    }
}