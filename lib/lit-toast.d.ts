import { LitElement, CSSResultArray, TemplateResult } from "lit";
export declare class LitToast extends LitElement {
    useTitleCase: boolean;
    private toastText;
    /** Styles for the shadow DOM. */
    static get styles(): CSSResultArray;
    render(): TemplateResult;
    connectedCallback(): void;
    protected sleep(ms: number): Promise<void>;
    show(text?: string, duration?: number, extraClass?: string): Promise<void>;
}
