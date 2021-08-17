var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { tCase } from "./tCase.js";
let LitToast = class LitToast extends LitElement {
    constructor() {
        super(...arguments);
        this.useTitleCase = false;
        this.toastText = "";
    }
    /** Styles for the shadow DOM. */
    static get styles() {
        return [
            css `:host {
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
      }`
        ];
    }
    render() {
        return html `${this.toastText}`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-live", "polite");
    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async show(text = "", duration = 3000, extraClass = "") {
        if (this.classList.contains("show")) {
            // Do nothing, prevent spamming
            return;
        }
        // 1000ms to not overlap fadein and fadeout animations
        if (duration >= 1000) {
            this.style.animation = `fadein 0.5s, fadeout 0.5s ${duration - 500}ms`;
        }
        if (extraClass !== "") {
            this.classList.add(extraClass);
        }
        this.toastText = this.useTitleCase ? tCase(text) : text;
        this.classList.add("show");
        await this.sleep(duration >= 1000 ? duration : 3000);
        this.toastText = "";
        this.style.animation = "";
        this.classList.remove("show");
        if (extraClass !== "") {
            this.classList.remove(extraClass);
        }
    }
};
__decorate([
    property({ type: Boolean, attribute: "use-title-case" })
], LitToast.prototype, "useTitleCase", void 0);
__decorate([
    state()
], LitToast.prototype, "toastText", void 0);
LitToast = __decorate([
    customElement("lit-toast")
], LitToast);
export { LitToast };
