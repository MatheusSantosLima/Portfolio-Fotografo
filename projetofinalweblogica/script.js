let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function validaNome() {
  var nome = document.getElementById('nome').value;
  if (nome === '') {
    alert('Preencha o nome');
  } else if (nome.length < 5) {
    alert('Mínimo 5 caracteres');
  }
}

function validaEmail() {
  var email = document.getElementById('email').value;
  if (email === '') {
    alert('Preencha o Email');
  } else if (email.length < 5) {
    alert('Mínimo 5 caracteres');
  }
}

function validarMensagem() {
  var mensagem = document.getElementById('mensagem').value;
  if (mensagem.length < 20 || mensagem.length > 200) {
    alert('A mensagem deve ter entre 20 e 200 caracteres.');
  }
}

function enviarMensagem() {
  alert('Mensagem enviada com sucesso!');
}
