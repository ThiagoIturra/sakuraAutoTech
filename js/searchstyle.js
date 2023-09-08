const searchContainerInput= document.querySelector(".search-container");
const inputField = document.querySelector(".magnifying-glass");

inputField.addEventListener("click", function(){
    if (searchContainerInput.style.width === "20px") {
        searchContainerInput.style.width = "25%";
    } else {
        searchContainerInput.style.width = "20px";
    }
});