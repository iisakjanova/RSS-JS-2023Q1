document.getElementById('focus-main-nav').focus();

// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const links = nav.querySelectorAll('a');

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burger.contains(event.target)) {
    nav.classList.remove('show');
    burger.classList.remove('burger-active');
    document.body.style.overflow = 'auto';
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    burger.classList.remove('burger-active');
    document.body.style.overflow = 'auto';
  });
});

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
  burger.classList.toggle('burger-active');

  if (nav.classList.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

//show pop-up
const closeBtn = document.querySelector('.close-btn');
const cards = document.querySelectorAll('.card');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup-title');
const popupDescription = document.querySelector('.popup-description');
const popupImage = document.querySelector('.popup-image');
const popupSubtitle = document.querySelector('.popup-subtitle');
const popupList = document.querySelector('.popup-list');
const body = document.querySelector('body');

fetch('../../assets/pets.json')
  .then(response => response.json())
  .then(data => {
    cards.forEach((card) => {
      const cardId = card.id;

      card.addEventListener('click', () => {
        const cardData = data.find(card => card.id === parseInt(cardId));
        popupTitle.textContent = cardData.name;
        popupDescription.textContent = cardData.description;
        popupSubtitle.textContent = cardData.type + ' - ' + cardData.breed;
        popupImage.src = cardData.img;

        popupList.innerHTML = 
          `<li><b>Age: </b>${cardData.age}</li>
          <li><b>Inoculations: </b>${cardData.inoculations[0]}</li>
          <li><b>Diseases: </b>${cardData.diseases[0]}</li>
          <li><b>Parasites: </b>${cardData.parasites[0]}</li>`
        
        overlay.style.display = 'flex';
        body.classList.add('overlay-open');
      });

      overlay.addEventListener('click', (event) => {
        if (body.classList.contains('overlay-open') && !popup.contains(event.target)) {
            body.classList.remove('overlay-open');
            overlay.style.display = 'none';
        }
      });

      closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        body.classList.remove('overlay-open');
      });
    });
  })
  .catch(error => console.error(error));
