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
        z-index: var(--lt-z-index, 2);
        bottom: var(--lt-bottom, 40px);
      }

      :host(.show) {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
      }

      div {
        min-width: 100px;
        background-color: var(--lt-background-color, #292929);
        color: var(--lt-color, #dddddd);
        text-align: center;
        border-radius: var(--lt-border-radius, 2px);
        padding: var(--lt-padding, 16px);
        border: var(--lt-border, none);
        font-size: var(--lt-font-size, 1em);
        font-family: var(--lt-font-family, sans-serif);
      }

      @-webkit-keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
      }

      @keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
      }

      @-webkit-keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }

      @keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
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

  show(text = '') {
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
