AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

function aplicarTema(preferenciaOscuro) {
  const body = document.body;
  if (preferenciaOscuro) {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
  } else {
    body.classList.add('theme-light');
    body.classList.remove('theme-dark');
  }
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
aplicarTema(mediaQuery.matches);

mediaQuery.addEventListener('change', (e) => {
  aplicarTema(e.matches);
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add('was-validated');
    return;
  }

  alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto. ❤️');
  form.reset();
  form.classList.remove('was-validated');
});

document.querySelectorAll('.cta-btn, #socials a').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 150);
  });
});

document.querySelectorAll('#carouselDelicias img').forEach(img => {
  img.onload = () => {
    if (img.naturalHeight > img.naturalWidth) {
      img.classList.add('vertical-img');
    } else {
      img.classList.add('horizontal-img');
    }
  };
});

