import { LitElement, html, css } from 'lit-element';

class LitToast extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        position: fixed;
        left: 50%;
        transform: translateX(-50%) translateY(110%);
        z-index: var(--lt-z-index, 2);
        bottom: 0;
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
        bottom: var(--lt-bottom, 40px);
        transform: translateX(-50%);
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
      }

      @-webkit-keyframes fadein {
        from {
          bottom: 0;
          transform: translateX(-50%) translateY(110%);
        }
        to {
          bottom: var(--lt-bottom, 40px);
          transform: translateX(-50%) translateY(0);
        }
      }

      @keyframes fadein {
        from {
          bottom: 0;
          transform: translateX(-50%) translateY(110%);
        }
        to {
          bottom: var(--lt-bottom, 40px);
          transform: translateX(-50%) translateY(0);
        }
      }

      @-webkit-keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          transform: translateX(-50%) translateY(0);
        }
        to {
          bottom: 0;
          transform: translateX(-50%) translateY(110%);
        }
      }

      @keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          transform: translateX(-50%) translateY(0);
        }
        to {
          bottom: 0;
          transform: translateX(-50%) translateY(110%);
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

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-live', 'polite');
  }

  show(text = '', duration = 3000) {
    return new Promise((resolve, reject) => {
      if (this.className === 'show') {
        // Do nothing, prevent spamming
      } else {
        // 1000ms to not overlap fadein and fadeout animations
        if (duration >= 1000) {
          this.style.animation = `fadein 0.5s, fadeout 0.5s ${duration -
            500}ms`;
        }
        this._toastText = text;
        this.className = 'show';
        setTimeout(
          () => {
            this._toastText = '';
            this.style.animation = '';
            this.className = this.className.replace('show', '');
            resolve();
          },
          duration >= 1000 ? duration : 3000
        );
      }
    });
  }
}

customElements.define('lit-toast', LitToast);
