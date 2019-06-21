# lit-toast

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lit-toast) ![npm](https://img.shields.io/npm/v/lit-toast.svg)

Web component for toasts implemented with LitElement..

![lit-toast example](https://raw.githubusercontent.com/Victor-Bernabe/lit-toast/master/img/example.png)

## Installation

```shell
npm install lit-toast --save
```

Then, import lit-toast into your element:

```javascript
import 'lit-toast/lit-toast.js';
```

or in an html file:

```html
<script type="module" src="/path/to/lit-toast.js"></script>
```

## Usage

In your LitElement class:

```javascript
static get styles() {
  return css`
    :host {
      display: block;
    }
    .container {
      display: relative;
      width: 100vw;
      height: 100vh;
    }
  `;
}
static get properties() {
  return {};
}

constructor() {
  super();
}

render() {
  return html`
    <div class="container">
      <button @click="${this._showToast}">
        Show Toast
      </button>
      <lit-toast>I'm a toast</lit-toast>
    </div>
  `;
}

_showToast() {
  this.shadowRoot.querySelector('lit-toast').show();
}
```

## Notes

- `lit-toast` must be child of an element with CSS property `position` set to relative (and preferably taking full width and height of the viewport). This allows the positioning of `lit-toast` on the window.
