document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('menu');

  // Alternar o menu ao clicar no ícone
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Fechar o menu ao clicar em um link
  const menuLinks = document.querySelectorAll('.menu ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  // Contador de perguntas avulsas
  let counter = 4;
  function updateCounter(change) {
    if (change === -1 && counter > 4) counter--;
    else if (change === 1) counter++;
    document.getElementById('counter-value').textContent = counter;
    updateBuyLink();
  }
  function updateBuyLink() {
    const buyButton = document.getElementById('buy-avulsas');
    const message = `Oi quero este serviço: ${counter} Perguntas Avulsas`;
    const whatsappLink = `https://wa.me/559191946826?text=${encodeURIComponent(message)}`;
    buyButton.href = whatsappLink;
  }
  updateBuyLink();

  // Adiciona eventos aos botões "+" e "-"
  document.querySelector('.plus').addEventListener('click', () => updateCounter(1));
  document.querySelector('.minus').addEventListener('click', () => updateCounter(-1));
});