const cardImg = document.querySelector('.img-card');
const cardTitle = document.querySelector('.title-card');
const carDescription = document.querySelector('.description-card');
const cardPrice = document.querySelector('.price-card');

const selling = [
    {
        img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
        title: 'Subaru WRX STI',
        description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
        price: 'R$308.900,00'
    },
  ];

  function cardAvailable() {
    const cardLine = document.querySelector('.line-card');

    selling.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const cardInnerHtml = `
          <div class="card-container">
            <img class="img-card" src="${item.img}" alt="">
            <h1 class="title-card">${item.title}</h1>
            <p class="description-card">${item.description}</p>
            <h2 class="price-card">${item.price}</h2>
          </div>
        `;
    
        card.innerHTML = cardInnerHtml;
        cardLine.appendChild(card);
      });

  }

  cardAvailable();