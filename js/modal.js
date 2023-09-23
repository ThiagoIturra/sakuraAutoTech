function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Configurar um ouvinte de evento para o botão de abrir modal
  var openModalBtn = document.querySelector(".background-button");
  openModalBtn.addEventListener("click", openModal);
  
  // Configurar um ouvinte de evento para o botão de fechar modal (X)
  var closeModalBtn = document.getElementById("closeModalBtn");
  closeModalBtn.addEventListener("click", closeModal);
  
  // Fechar o modal se o usuário clicar fora dele
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      closeModal();
    }
  });