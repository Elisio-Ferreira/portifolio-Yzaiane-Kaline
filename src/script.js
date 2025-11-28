document.addEventListener('DOMContentLoaded', function(){
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn.addEventListener('click', () => {
    if(nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.5rem';
      nav.style.padding = '1rem';
      nav.style.background = 'rgba(2,6,23,0.6)';
      nav.style.position = 'absolute';
      nav.style.right = '1rem';
      nav.style.top = '64px';
      nav.style.borderRadius = '8px';
    }
  });

  // simple reveal on scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.reveal, .cards-grid .card, .work, .hero-card, .hero-text').forEach(el => observer.observe(el));

  // form send simulation
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim() || 'Amigo';
    formMsg.textContent = `Obrigado, ${name}! Mensagem recebida — entrarei em contato em breve.`;
    formMsg.style.color = 'lightgreen';
    form.reset();
  });
});
