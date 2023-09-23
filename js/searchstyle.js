const searchContainerInput= document.querySelector(".search-container");
const searchSvg = document.querySelector(".magnifying-glass");

searchSvg.addEventListener("click", function(){
    if (searchContainerInput.style.width === "18%") {
        searchContainerInput.style.width = "20px";
    } else {
        searchContainerInput.style.width = "18%";
    }
});