import { LitElement, html, css, CSSResultArray, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { tCase } from "./tCase.js";

@customElement("lit-toast")
export class LitToast extends LitElement {

    @property({type: Boolean, attribute: "use-title-case"})
    public useTitleCase = false;

    @state()
    private toastText = "";

    /** Styles for the shadow DOM. */
    public static get styles(): CSSResultArray {
        return [
            css`:host {
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

    public render(): TemplateResult {
        return html`${this.toastText}`;
    }

    public connectedCallback(): void {
        super.connectedCallback();
        this.setAttribute("aria-live", "polite");
    }


    protected async sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    public async show(text = "", duration = 3000, extraClass = ""): Promise<void> {
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
}
