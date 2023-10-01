const selling = [
  {
    img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
    title: 'Subaru WRX STI',
    description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
    price: 'R$308.900,00',
    region: 'Tokyo, Japan',
    id: 123456789
  },
  {
    img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
    title: 'teste1',
    description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
    price: 'R$308.900,00',
    region: 'Tokyo, Japan',
    id: 123498765
  },
  {
    img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
    title: 'teste2',
    description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
    price: 'R$308.900,00',
    region: 'Tokyo, Japan',
    id: 987654321
  }
];

function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardInnerHtml = `
      <a href="productDetails.html?id=${product.id}">
        <img class="img-card" src="${product.img}" alt="">
        <h1 class="title-card">${product.title}</h1>
        <p class="description-card">${product.description}</p>
        <h2 class="price-card">${product.price}</h2>
      </a>
  `;
  
    card.innerHTML = cardInnerHtml;
    return card;
  }
  
  function renderCards() {
    const cardLine = document.querySelector('.line-card');
  
    selling.forEach((product, index) => {
      const card = createCard(product);
      cardLine.appendChild(card);
    });
  }
  
  renderCards();
