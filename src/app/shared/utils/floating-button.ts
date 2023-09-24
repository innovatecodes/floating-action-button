export class FloatingButton extends HTMLElement {

  constructor() {
    super();
    const elements: ShadowRoot = this.attachShadow({ mode: 'open' });
    elements.appendChild(this.build());
    elements.appendChild(this.styles());
  }

  // Create elements
  build() {
    const contentElement = document.createElement('div');
    const buttonElement = document.createElement('button');
    contentElement.setAttribute("class", "content");
    buttonElement.setAttribute("type", "button");
    buttonElement.innerText = "Button";
    contentElement.appendChild(buttonElement)
    return contentElement;
  }
  // Create styles
  styles() {
    const styles = document.createElement('style');
    styles.textContent = `
    .content{
      display: block;
      position: relative;
      max-width: 768px;
      margin: auto;
      height: 400px;
      // Descomente a linha abaixo para que a altura do conteúdo seja dinâmica
      // height: max-content;
      box-shadow: 2px 2px 4px -1px rgba(0,0,0,0.21);
      background-color: #fafafa;
      border-top-right-radius: 28px;
      border-bottom-left-radius: 28px;
    }
    button{
      position: relative;
      top: -28px;
      left: 28px;
      display: block;
      border: none;
      outline: none;
      padding: 14.5px 0;
      width: 160px;
      font-weight: 600;
      font-family: 'aria, sans-serif';
      font-size: 1.5rem;
      border-radius: 28px;
      text-transform: capitalize;
      color: #999;
      background-color: #fafafa;
      transition: all 0.2s ease-out;
      transform: scale(1);
      box-shadow: 2px 2px 4px -1px rgba(0,0,0,0.21);
      background-image: linear-gradient(to right, rgba(130,140,105,0.3) 4%, rgba(130,140,105,0.2) 12%, rgba(130,140,105,0.1) 75%);
    }
    button:hover{
      cursor: pointer;
      transform: scale(1.1);
      box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.31);
      background-image: linear-gradient(to left, rgba(130,140,105,0.3) 4%, rgba(130,140,105,0.2) 12%, rgba(130,140,105,0.1) 75%);
    }
    `;
    return styles;
  }
}

// View elements
customElements.define('floating-action-button', FloatingButton);
