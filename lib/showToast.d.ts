import { CSSResultGroup } from "lit";
import { LitToast } from "./lit-toast";
export declare type ExtraClassType = "error" | "success" | "info" | "warning";
export declare function showToast(toastEl: LitToast, msg: string, className?: ExtraClassType, duration?: number): Promise<void>;
export declare const toastStyles: CSSResultGroup;
