// Atualizar o relógio
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  $('#hours').text(hours);
  $('#minutes').text(minutes);
  $('#seconds').text(seconds);
}

// Definir as paletas de cores
const colorSchemes = [
  { background: 'url("subway.png")', textColor: '#fff', shadowColor: 'rgba(255, 255, 255, 0.5)' },
  { background: 'url("clockgreen.png")', textColor: '#808080', shadowColor: 'rgba(0, 0, 0, 0.5)' },
  { background: 'url("orangenew2.jpg")', textColor: '#ff5722', shadowColor: 'rgba(255, 87, 34, 0.4)' },
  { background: 'url("blueclock.png")', textColor: '#61dafb', shadowColor: 'rgba(97, 218, 251, 0.4)' },
  { background: 'url("clockpink.jpg")', textColor: '#ff4081', shadowColor: 'rgba(255, 65, 145, 0.4)' },
  { background: 'url("clockyellow.png")', textColor: '#fdd835', shadowColor: 'rgba(255, 221, 53, 0.4)' },
  { background: 'url("clock.png")', textColor: '#ff5722', shadowColor: 'rgba(255, 87, 34, 0.4)' },
  { background: 'url("clockroxo.jpeg")', textColor: '#9c27b0', shadowColor: 'rgba(156, 39, 176, 0.4)' },
  { background: 'url("redjapan.jpg")', textColor: 'red', shadowColor: 'rgba(255, 0, 0, 0.4)' },
];

// Função para aplicar o esquema de cores
function applyColorScheme(scheme) {
  $('body').css({
    'background-image': scheme.background,
    'background-size': 'cover',
    'transition': 'background-image 0.5s ease-in-out, background-color 0.5s ease-in-out' // Garantindo a transição aqui também
  });
  $('.time-unit, .separator').css('color', scheme.textColor);
  $('.clock-container').css('box-shadow', `0 0 20px ${scheme.shadowColor}`); // Alterar a sombra do relógio
}


// Gerar botões de cor dinamicamente
$(document).ready(() => {
  const buttonContainer = $('.color-buttons');
  colorSchemes.forEach((scheme) => {
    const button = $('<button></button>')
      .addClass('color-button')
      .css('background-color', scheme.textColor)
      .click(() => applyColorScheme(scheme));

    buttonContainer.append(button);
  });

  // Iniciar com o primeiro esquema de cores
  applyColorScheme(colorSchemes[0]);

  // Atualizar o relógio a cada segundo
  setInterval(updateClock, 1000);
  updateClock();
});
