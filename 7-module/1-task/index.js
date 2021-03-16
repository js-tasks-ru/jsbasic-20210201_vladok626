import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories
    this.render()
    this.scroll()
    this.selectCategory()
  }

  render() {
    this.elem = createElement(
      `<div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
          ${this.categories.map((item) =>
            `<a href="#" class="ribbon__item "  data-id="${item.id}">${item.name}</a>`).join('')}
        </nav>

        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`)
  }

  scroll() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner')
    let rightButton = this.elem.querySelector('.ribbon__arrow_right')
    let leftButton = this.elem.querySelector('.ribbon__arrow_left')

    rightButton.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    })

    leftButton.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    })
  
    ribbonInner.addEventListener('scroll', function () {
    let scrollRight = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth
    
      if(ribbonInner.scrollLeft == 0){
        leftButton.classList.remove('ribbon__arrow_visible');
      } else if(scrollRight < 1) {
        rightButton.classList.remove('ribbon__arrow_visible')
      } else {
        leftButton.classList.add('ribbon__arrow_visible');
        rightButton.classList.add('ribbon__arrow_visible');
      }
    })
  }

  selectCategory() {
    this.elem.querySelector('.ribbon__inner')
    this.elem.addEventListener('click', (event) => {
      event.preventDefault()

      event.target.classList.add('ribbon__item_active')
      
      let itemActive = this.elem.querySelector('.ribbon__item_active');

      if(itemActive){
        itemActive.classList.remove('ribbon__item_active');
      }
    
      event.target.dispatchEvent(new CustomEvent('ribbon-select', { 
        detail: event.target.dataset.id,
        bubbles: true
      }))
    })
  }
}
