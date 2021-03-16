import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides
    this.render()
    this.switcher()
    this.addBtn()
  }

  render() {
    this.elem = createElement(
      `<div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
        
      <div class="carousel__inner">

      ${this.slides.map((item) =>
        `<div class="carousel__slide" data-id="${item.id}">
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${item.price.toFixed(2)}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`).join('')}

      </div>
    </div>`)
    }

  switcher() {
    let leftButton = this.elem.querySelector('.carousel__arrow_left')
    let rightButton = this.elem.querySelector('.carousel__arrow_right')
    let carouselInner = this.elem.querySelector('.carousel__inner')
    let slide = this.elem.querySelector('.carousel__slide')
    let startPosition = 0
  
    leftButton.style.display = 'none'
  
    leftButton.onclick = function () {
      rightButton.style.display = ''
      startPosition += slide.offsetWidth
      carouselInner.style.transform = `translateX(${startPosition}px)`
      if (startPosition == 0) {
        leftButton.style.display = 'none';
      }
    }
  
    rightButton.onclick = function () {
      leftButton.style.display = ''
      startPosition -= slide.offsetWidth
      carouselInner.style.transform = `translateX(${startPosition}px)`
      if (startPosition < -2 * slide.offsetWidth) {
        rightButton.style.display = 'none';
      }
    }
  }

  addBtn(){
    this.elem.onclick = (event) => {
     if (event.target.closest('.carousel__button')) {
        let slideId = event.target.closest('.carousel__slide').dataset.id

        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: slideId,
          bubbles: true
        }))
      }
    }
  }
}
