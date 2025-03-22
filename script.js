let currentImageIndex = 0;
const images = [
    'imagens/img1.jpeg',
    'imagens/img2.jpeg',
    'imagens/img3.jpeg',
    'imagens/img4.jpeg',
    'imagens/img5.jpeg',
    'imagens/img6.jpeg',
    'imagens/img7.jpeg',
    'imagens/img8.jpeg'
];

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Muda para a próxima imagem
    document.getElementById('carouselImage').src = images[currentImageIndex];
}

// Muda a imagem a cada 3 segundos (3000 milissegundos)
setInterval(changeImage, 3000);

// Data de início
const startDate = new Date("2025-02-14T00:00:00").getTime();

const countUpFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate; // Tempo passado desde a data de início

    // Cálculo de dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe a contagem no elemento com id "countdown"
    document.getElementById("countdown").innerHTML = days + " dias " + hours + " horas "
        + minutes + " minutos " + seconds + " segundos ";
}, 1000);