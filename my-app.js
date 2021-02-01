import { LitElement, html, css } from 'lit-element';

import '/lit-toast.js';

class MyApp extends LitElement {
  static get styles() {
    return css`
      * {
        font-family: Selawk, Helvetica, sans-serif;
        box-sizing: border-box;
      }
      :host {
        --primary-text-color: #666666;
        --panel-background: #f6f6f6;
        --panel-border-color: #707070;
        --placeholder-color: #b3b3b3;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        min-height: 100vh;
        color: var(--primary-text-color, #666666);
        font-size: 20px;
      }

      .container {
        max-width: 1200px;
        padding: 0 20px;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 38px 0;
      }

      h1 {
        font-size: 60px;
        font-weight: bold;
        margin: 0;
        padding: 0;
      }

      #link-github {
        width: 40px;
        height: 40px;
        background-color: transparent;
        background-image: url('src/img/GitHub.svg');
        background-size: 40px;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        padding: 0;
        margin: 0;
      }

      #button-github:hover {
        cursor: pointer;
      }

      #call-toast {
        display: block;
        font-family: Selawk, Helvetica, sans-serif;
        font-size: 26px;
        font-weight: bold;
        padding: 14px 40px;
        border: 2px solid transparent;
        border-radius: 30px;
        background-image: linear-gradient(-45deg, #128158, #5aae53);
        color: white;
        margin: 60px auto 100px auto;
        box-shadow: 0 2px 2px 0 rgba(71, 162, 66, 0.14),
          0 3px 1px -2px rgba(71, 162, 66, 0.12),
          0 1px 5px 0 rgba(71, 162, 66, 0.2);
        transition: box-shadow 0.4s;
      }

      #call-toast:hover {
        cursor: pointer;
        box-shadow: 0 8px 10px 1px rgba(71, 162, 66, 0.14),
          0 3px 14px 2px rgba(71, 162, 66, 0.12),
          0 5px 5px -3px rgba(71, 162, 66, 0.2);
        /*transform: scale(1.04);*/
      }

      #call-toast:focus {
        outline: none;
        box-shadow: 0 8px 10px 1px rgba(71, 162, 66, 0.14),
          0 3px 14px 2px rgba(71, 162, 66, 0.12),
          0 5px 5px -3px rgba(71, 162, 66, 0.2);
        border: 2px solid #3d85bc;
      }

      h2 {
        font-weight: bold;
        font-size: 26px;
        margin: 0 0 40px 0;
      }

      .panel {
        margin-bottom: 100px;
        background-color: #f6f6f6;
        border: 1px solid var(--panel-border-color, #707070);
        padding: 30px;
      }

      .panel-code {
        font-size: 15px;
        padding-right: 10px;
      }

      .panel-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .option {
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;
      }

      /* Last option of the last column of Options Panel */
      .panel-column:last-child .option:last-child {
        margin-bottom: 0;
      }

      .input-common {
        width: 54px;
        text-align: center;
        font-size: 14px;
        padding: 4px 10px;
        background-color: white;
        border: 1px solid var(--panel-border-color, #707070);
        min-width: 0;
      }

      .input-common::placeholder {
        color: var(--placeholder-color, #b3b3b3);
      }

      .input-long-text {
        width: 140px;
      }

      input[type='color'] {
        -webkit-appearance: none;
        padding: 0;
        height: 28px;
      }

      input[type='color']::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      input[type='color']::-webkit-color-swatch {
        border: none;
      }

      input:focus,
      button:focus,
      a:focus {
        outline: 2px solid #3d85bc;
      }

      select.input-common {
        width: auto;
      }

      .css-selector {
        color: #16509c;
      }

      .css-selector::after {
        content: ' ';
        white-space: pre;
      }

      .bracket {
        color: #9b0808;
      }

      .css-property {
        color: var(--primary-text-color, #666666);
      }

      .css-property::before {
        content: '  ';
        white-space: pre;
      }

      .css-property::after {
        content: ' ';
        white-space: pre;
      }

      .css-value {
        color: #035e33;
      }

      /* Tablets */
      @media all and (min-width: 700px) {
        :host {
          align-items: center;
        }

        #call-toast {
          margin-bottom: 60px;
        }

        .panel {
          border: none;
          box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
        }

        .panel-options {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .panel-options > .panel-column:first-child {
          margin-right: 60px;
        }

        .panel-code {
          padding-right: 30px;
        }

        /* Option 5 shouldn't have margin bottom */
        .panel-column:first-child .option:last-child {
          margin-bottom: 0;
        }

        .option-title {
          margin-right: 45px;
        }
      }

      /* Desktops */
      @media all and (min-width: 1240px) {
        main {
          display: flex;
          flex-direction: column;
        }

        #panels {
          display: flex;
          justify-content: center;
          align-items: stretch;
          order: 1;
          margin: 60px 0;
        }

        #call-toast {
          order: 2;
          margin: 40px auto;
          margin-bottom: 100px;
        }

        section:first-child {
          margin-right: 20px;
        }

        section:last-child {
          display: flex;
          flex-direction: column;
        }

        .panel {
          min-width: 570px;
          margin-bottom: 0;
        }

        .panel-code {
          flex-grow: 1;
        }
      }

      /* Small Mobile */
      @media all and (max-width: 319px) {
        :host {
          font-size: 16px;
        }

        h1 {
          font-size: 50px;
        }
      }
    `;
  }

  static get properties() {
    return {
      toast: { type: Object },

      _showOptions: { type: Boolean },

      _message: { type: String },
      _padding: { type: String },
      _bottom: { type: String },
      _zIndex: { type: String },
      _fontSize: { type: String },
      _borderRadius: { type: String },
      _border: { type: String },
      _color: { type: String },
      _backgroundColor: { type: String },
      _fontFamily: { type: String }
    };
  }

  constructor() {
    super();
    this.toast = null;

    this._showOptions = true;

    this._message = 'Message';
    this._padding = '16px';
    this._bottom = '40px';
    this._zIndex = '2';
    this._fontSize = '1em';
    this._borderRadius = '2px';
    this._border = 'none';
    this._color = '#dddddd';
    this._backgroundColor = '#292929';
    this._fontFamily = 'sans-serif';
  }

  render() {
    return html`
      <!-- Toast to be shown -->
      <lit-toast></lit-toast>

      <!-- Primary Container (to center everything) -->
      <div class="container">
        <!-- Title + GitHub link -->
        <header>
          <h1>lit-toast</h1>
          <a
            href="https://github.com/Victor-Bernabe/lit-toast"
            rel="noreferrer"
            id="link-github"
            aria-label="See on GitHub"
            title="See on GitHub"
          ></a>
        </header>

        <main>
          <!-- Call Toast Button -->
          <button id="call-toast" @click="${this._callToast}">
            Call Toast
          </button>

          ${this._showOptions
            ? html`
                <!-- Panels Section -->
                <div id="panels">
                  <!-- Options Section -->
                  <section>
                    <h2>Options</h2>
                    <div class="panel panel-options">
                      <!-- Options from 1 to 5 -->
                      <div class="panel-column">
                        <div class="option">
                          <span id="padding" class="option-title">padding</span>
                          <input
                            class="input-common"
                            type="text"
                            placeholder="16px"
                            .value="${this._padding}"
                            @input="${this._updatePadding}"
                            aria-labelledby="padding"
                          />
                        </div>
                        <div class="option">
                          <span id="bottom" class="option-title">bottom</span>
                          <input
                            class="input-common"
                            type="text"
                            placeholder="40px"
                            .value="${this._bottom}"
                            @input="${this._updateBottom}"
                            aria-labelledby="bottom"
                          />
                        </div>
                        <div class="option">
                          <span id="color" class="option-title">color</span>
                          <input
                            class="input-common"
                            type="color"
                            .value="${this._color}"
                            @change="${this._updateColor}"
                            aria-labelledby="color"
                            title="${this._color}"
                          />
                        </div>
                        <div class="option">
                          <span id="z-index" class="option-title">z-index</span>
                          <input
                            class="input-common"
                            type="text"
                            placeholder="2"
                            .value="${this._zIndex}"
                            @input="${this._updateZIndex}"
                            aria-labelledby="z-index"
                          />
                        </div>
                        <div class="option">
                          <span id="font-size" class="option-title"
                            >font-size</span
                          >
                          <input
                            class="input-common"
                            type="text"
                            placeholder="1em"
                            .value="${this._fontSize}"
                            @input="${this._updateFontSize}"
                            aria-labelledby="font-size"
                          />
                        </div>
                      </div>

                      <!-- Options from 6 to 10 -->
                      <div class="panel-column">
                        <div class="option">
                          <span id="font-family" class="option-title"
                            >font-family</span
                          >
                          <select
                            class="input-common"
                            @change="${this._updateFontFamily}"
                            aria-labelledby="font-family"
                          >
                            <option value="sans-serif">sans-serif</option>
                            <option value="serif">serif</option>
                          </select>
                        </div>
                        <div class="option">
                          <span id="border-radius" class="option-title"
                            >border-radius</span
                          >
                          <input
                            class="input-common"
                            type="text"
                            placeholder="2px"
                            .value="${this._borderRadius}"
                            @input="${this._updateBorderRadius}"
                            aria-labelledby="border-radius"
                          />
                        </div>
                        <div class="option">
                          <span id="background-color" class="option-title"
                            >background-color</span
                          >
                          <input
                            class="input-common"
                            type="color"
                            .value="${this._backgroundColor}"
                            @change="${this._updateBackgroundColor}"
                            aria-labelledby="background-color"
                            title="${this._backgroundColor}"
                          />
                        </div>
                        <div class="option">
                          <span id="border" class="option-title">border</span>
                          <input
                            class="input-common input-long-text"
                            type="text"
                            placeholder="none"
                            .value="${this._border}"
                            @input="${this._updateBorder}"
                            aria-labelledby="border"
                          />
                        </div>
                        <div class="option">
                          <span id="text" class="option-title">text</span>
                          <input
                            class="input-common input-long-text"
                            type="text"
                            placeholder="Message"
                            .value="${this._message}"
                            @input="${this._updateMessage}"
                            aria-labelledby="text"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <!-- Code Section -->
                  <section>
                    <h2>Code</h2>
                    <div class="panel panel-code">
                      <span class="css-selector">#toast</span
                      ><span class="bracket">{</span><br />
                      <span class="css-property">--lt-background-color:</span>
                      <span class="css-value">${this._backgroundColor};</span
                      ><br />
                      <span class="css-property">--lt-color:</span>
                      <span class="css-value">${this._color};</span><br />
                      <span class="css-property">--lt-padding:</span>
                      <span class="css-value">${this._padding};</span><br />
                      <span class="css-property">--lt-bottom:</span>
                      <span class="css-value">${this._bottom};</span><br />
                      <span class="css-property">--lt-font-size:</span>
                      <span class="css-value">${this._fontSize};</span><br />
                      <span class="css-property">--lt-font-family:</span>
                      <span class="css-value">${this._fontFamily};</span><br />
                      <span class="css-property">--lt-border-radius:</span>
                      <span class="css-value">${this._borderRadius};</span
                      ><br />
                      <span class="css-property">--lt-border:</span>
                      <span class="css-value">${this._border};</span><br />
                      <span class="css-property">--lt-z-index:</span>
                      <span class="css-value">${this._zIndex};</span><br />
                      <span class="bracket">}</span>
                    </div>
                  </section>
                </div>
              `
            : html`
                <!-- path and composedPath() are not supported so... no options :( -->
              `}
        </main>
      </div>
    `;
  }

  firstUpdated() {
    // Get lit-toast referece to save multiple DOM access
    this.toast = this.shadowRoot.querySelector('lit-toast');

    // If 'path' or 'composedPath()' unavailable, don't show options
    this.addEventListener('click', event => {
      this._showOptions = event.path || event.composedPath();
    });

    this.click();
  }

  _callToast() {
    this.toast.show(this._message);
  }

  _updateMessage(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._message = path[0].value;
    }
  }

  _updatePadding(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._padding = path[0].value;
      this.toast.style.setProperty('--lt-padding', this._padding);
    }
  }

  _updateBottom(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._bottom = path[0].value;
      this.toast.style.setProperty('--lt-bottom', this._bottom);
    }
  }

  _updateZIndex(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._zIndex = path[0].value;
      this.toast.style.setProperty('--lt-z-index', this._zIndex);
    }
  }

  _updateFontSize(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._fontSize = path[0].value;
      this.toast.style.setProperty('--lt-font-size', this._fontSize);
    }
  }

  _updateBorderRadius(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._borderRadius = path[0].value;
      this.toast.style.setProperty('--lt-border-radius', this._borderRadius);
    }
  }

  _updateBorder(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._border = path[0].value;
      this.toast.style.setProperty('--lt-border', this._border);
    }
  }

  _updateColor(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._color = path[0].value;
      this.toast.style.setProperty('--lt-color', this._color);
    }
  }

  _updateBackgroundColor(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._backgroundColor = path[0].value;
      this.toast.style.setProperty(
        '--lt-background-color',
        this._backgroundColor
      );
    }
  }

  _updateFontFamily(event) {
    let path = event.path || event.composedPath();
    if (path) {
      this._fontFamily = path[0].value;
      this.toast.style.setProperty('--lt-font-family', this._fontFamily);
    }
  }
}

customElements.define('my-app', MyApp);
