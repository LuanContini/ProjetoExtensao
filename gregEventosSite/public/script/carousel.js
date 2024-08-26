document.getElementById("carousel").addEventListener("onload", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const totalItems = document.querySelectorAll(".carousel-item").length;

  // Define o tamanho do container para acomodar todos os itens
  carouselContainer.style.width = `${totalItems * 100}%`;

  // Ajusta o slide para que ele seja contínuo
  const updateCarousel = () => {
    carouselContainer.style.transform = `translateX(-${
      (totalItems - 1) * 20
    }%)`;
  };

  updateCarousel(); // Atualiza o carrossel no início
});
