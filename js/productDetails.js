const selling = [
    {
        img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
        alt: "",
        title: 'Subaru WRX STI',
        description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
        price: 'R$308.900,00',
        region: 'Tokyo, Japan',
        id: 123456789
    },
    {
        img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
        alt: "",
        title: 'teste1',
        description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
        price: 'R$308.900,00',
        region: 'Tokyo, Japan',
        id: 123498765
    },
    {
        img: './assets/img/0e10e16ea89ec51f52afd8d1ae0fba58.jpg',
        alt: "",
        title: 'teste2',
        description: 'Performance with stability under your control. The Subaru WRX STI is the car for speed enthusiasts. Born from the top rally competitions, the Subaru Tecnica International WRX carries the legacy of the STI three letters with over 300 horsepower, ensuring you the performance of a racing driver. Are you just going to imagine? Its time for you to live this exciting experience with one of the most engaging cars to drive.',
        price: 'R$308.900,00',
        region: 'Tokyo, Japan',
        id: 987654321
    }
];

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function loadProductDetails() {
    const productId = getParameterByName('id');

    if (productId !== null) {
        const product = selling.find(item => item.id === parseInt(productId));

        if (product) {
            document.querySelector('.product-image').src = product.img;
            document.querySelector('.product-title').textContent = product.title;
            document.querySelector('.product-description').textContent = product.description;
            document.querySelector('.product-price').textContent = product.price;
            document.querySelector('.product-region').textContent = `Localização: ${product.region}`;
            document.title = product.title;

        } else {
            const notFoundText = document.getElementById("notFound");
            const productSection = document.querySelector(".product-details");
            productSection.style.display = "none";
            notFoundText.style.display = "grid";
            document.title = "Product not found";
        }
    }
}

window.onload = loadProductDetails;