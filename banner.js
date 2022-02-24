let banner = document.querySelector('.banner');
let closeBtn = document.querySelector('.popup-close');

function handlePopup() {
  banner.style.display = 'none';
}

closeBtn.addEventListener('click', handlePopup);