const elements = document.querySelectorAll('.description-card');
const limit = 60;

elements.forEach((element) => {
  limiter(element, limit);
});

function limiter(h2Element, characterLimit) {
  const text = h2Element.textContent;

  if (text.length > characterLimit) {
    const textLimit = text.slice(0, characterLimit) + '...';
    h2Element.textContent = textLimit;
  }
}
  
  
  
  
  
  