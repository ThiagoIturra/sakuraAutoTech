const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", filterCards);

function filterCards() {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();
        
        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}