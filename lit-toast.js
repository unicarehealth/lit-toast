import { LitElement, html, css } from 'lit-element';

class LitToast extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
        visibility: hidden;
        position: fixed;
        z-index: 1;
        bottom: 40px;
      }

      :host(.show) {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
      }

      div {
        min-width: 100px;
        background-color: var(--hc-dark-background, #292929);
        color: var(--hc-light-text, #dddddd);
        text-align: center;
        border-radius: 2px;
        padding: 16px;
      }

      @-webkit-keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: 40px;
          opacity: 1;
        }
      }

      @keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: 40px;
          opacity: 1;
        }
      }

      @-webkit-keyframes fadeout {
        from {
          bottom: 40px;
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }

      @keyframes fadeout {
        from {
          bottom: 40px;
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }
    `;
  }

  static get properties() {
    return {
      _toastText: { type: String }
    };
  }

  constructor() {
    super();
    this._toastText = '';
  }

  render() {
    return html`
      <div>
        ${this._toastText}
      </div>
    `;
  }

  show(text) {
    if (this.className === 'show') {
      // Do nothing, prevent spamming
    } else {
      this._toastText = text;
      this.className = 'show';
      setTimeout(() => {
        this.className = this.className.replace('show', '');
      }, 3000);
    }
  }
}

customElements.define('lit-toast', LitToast);
