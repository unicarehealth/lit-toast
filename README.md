# lit-toast

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lit-toast) ![npm](https://img.shields.io/npm/v/lit-toast.svg)

Web component for toasts implemented with LitElement.

[Demo](https://lit-toast-demo.victorbp.site)

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

/**
 * toast.show(message, [duration], [extraClass])
 * message: String
 * duration: Number in ms
 * extraClass: String allows application of custom styles
 *
 * return: Promise<void>, resolved when the toast has finished
 */
_showToast() {
  this.shadowRoot.querySelector("lit-toast").show("I'm an error toast", 2500, "error");
  this.shadowRoot.querySelector("lit-toast").show("I'm a success toast", 2500, "success");
}
```

## Styling

```css
lit-toast {
  --lt-border: 2px solid #000000;
}

lit-toast.error {
    --lt-border: 2px solid #A93226;
    --lt-color:	#A93226;
}

lit-toast.success {
    --lt-border: 2px solid #196F3D;
    --lt-color:	#196F3D;
}
```

| CSS property          | Default value |
| --------------------- | ------------- |
| --lt-background-color | #292929       |
| --lt-border           | none          |
| --lt-border-radius    | 2px           |
| --lt-bottom           | 40px          |
| --lt-color            | #dddddd       |
| --lt-font-family      | sans-serif    |
| --lt-font-size        | 1em           |
| --lt-padding          | 16px          |
| --lt-z-index          | 2             |
