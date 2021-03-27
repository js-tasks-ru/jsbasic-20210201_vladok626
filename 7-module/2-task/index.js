import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render()
    this.keydownEscape()
    this.crossClick()
  }

  render() {
    this.elem = createElement(
      `<div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">  
            </h3>
          </div>

          <div class="modal__body">  
          </div>
        </div>

      </div>`)
  }

  open() {
    document.body.classList.add('is-modal-open')
    document.body.append(this.elem)
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector('.modal__title')
    modalTitle.textContent = title
  }

  setBody(node) {
    let modalBody = this.elem.querySelector('.modal__body')
    modalBody.append(node)
  }

  keydownEscape() {
    document.addEventListener('keydown', (e) => {
      if (e.code == 'Escape') {
        this.close();
      }
    })
  }

  crossClick() {
    let crossButton = this.elem.querySelector('.modal__close')
    crossButton.addEventListener('click', () => this.close())
  }

  close() {
    document.body.classList.remove('is-modal-open')
    this.elem.remove()
    document.removeEventListener('keydown', this.keydownEscape)
  }

}
