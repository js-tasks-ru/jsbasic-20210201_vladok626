function initCarousel() {
  
  let leftButton = document.querySelector('.carousel__arrow_left')
  let rightButton = document.querySelector('.carousel__arrow_right')
  let slide = document.querySelector('.carousel__inner')
  let slideOffset = document.querySelector('.carousel__inner').offsetWidth
  let startPosition = 0

  leftButton.style.display = 'none'

  leftButton.onclick = function () {
    rightButton.style.display = ''
    startPosition += slideOffset
    slide.style.transform = `translateX(${startPosition}px)`
    if (startPosition == 0) {
      leftButton.style.display = 'none';
    }
  }

  rightButton.onclick = function () {
    leftButton.style.display = ''
    startPosition -= slideOffset
    slide.style.transform = `translateX(${startPosition}px)`
    if (startPosition < -2 * slideOffset) {
      rightButton.style.display = 'none';
    }
  }
}
