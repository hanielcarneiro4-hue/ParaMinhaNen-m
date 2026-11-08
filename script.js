const openSiteButton = document.getElementById('openSite');
const welcome = document.getElementById('welcome');
const siteContent = document.getElementById('siteContent');

openSiteButton.addEventListener('click', () => {
  welcome.classList.add('opening');
  window.setTimeout(() => {
    welcome.style.display = 'none';
    siteContent.classList.add('visible');
    siteContent.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 650);
});

// Contador desde o primeiro dia de conversa.
function updateRelationshipCounter() {
  const start = new Date(2026, 5, 9); // mês 5 = junho
  const now = new Date();
  const days = Math.max(0, Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - start) / 86400000));
  let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  if (now.getDate() < start.getDate()) months--;
  months = Math.max(0, months);
  document.getElementById('daysCount').textContent = days;
  document.getElementById('monthsCount').textContent = months;
}
updateRelationshipCounter();

// Galeria ampliada.
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = () => {
  lightbox.classList.remove('visible');
  document.body.style.overflow = '';
};
document.querySelectorAll('.polaroid').forEach((frame) => {
  frame.addEventListener('click', () => {
    const image = frame.querySelector('img');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = frame.querySelector('figcaption').textContent;
    lightbox.classList.add('visible');
    document.body.style.overflow = 'hidden';
  });
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

// Abertura da carta.
const letterEnvelope = document.getElementById('letterEnvelope');
const letterPaper = document.getElementById('letterPaper');
const letterHint = document.getElementById('letterHint');
letterEnvelope.addEventListener('click', () => {
  const isOpen = letterEnvelope.classList.toggle('opened');
  if (isOpen) {
    letterPaper.classList.add('revealed');
    letterPaper.setAttribute('aria-hidden', 'false');
    letterHint.textContent = 'um carinho escrito especialmente para você ♡';
    window.setTimeout(() => {
      letterPaper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 350);
  } else {
    letterPaper.classList.remove('revealed');
    letterPaper.setAttribute('aria-hidden', 'true');
    letterHint.textContent = 'um envelope, um tantão de amor e algumas palavras só suas';
  }
});
