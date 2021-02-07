import { LitElement, html, css } from 'lit-element';

class LitToast extends LitElement {
  static get styles() {
    return css`
      :host {
        display: none;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: var(--lt-z-index, 2);
        bottom: var(--lt-bottom, 40px);
        background-color: var(--lt-background-color, #292929);
        color: var(--lt-color, #dddddd);
        text-align: center;
        border-radius: var(--lt-border-radius, 2px);
        padding: var(--lt-padding, 16px);
        border: var(--lt-border, none);
        font-size: var(--lt-font-size, 1em);
        font-family: var(--lt-font-family, sans-serif);
      }

      :host(.show) {
        display: flex;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
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
      ${this._toastText}
    `;
  }

  firstUpdated() {
    this.setAttribute('aria-live', 'polite');
  }

  show(text = '', duration = 3000) {
    return new Promise((resolve, reject) => {
      if (this.className === 'show') {
        // Do nothing, prevent spamming
      } else {
        // 1000ms to avoid both 0.5s animations to not interfere
        if (duration >= 1000) {
          this.style.animation = `fadein 0.5s, fadeout 0.5s ${duration -
            500}ms`;
        }
        this._toastText = text;
        this.className = 'show';
        setTimeout(() => {
          this.className = this.className.replace('show', '');
          resolve();
        }, duration);
      }
    });
  }
}

customElements.define('lit-toast', LitToast);
