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
    <button @click="${this._showToast}">
      Show Toast
    </button>
    <lit-toast></lit-toast>
  `;
}

_showToast() {
  this.shadowRoot.querySelector('lit-toast').show("I'm a toast");
}
```
