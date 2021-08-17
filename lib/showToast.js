import { css } from "lit";
export async function showToast(toastEl, msg, className = "success", duration = 3000) {
    await toastEl.show(msg, duration, className);
}
export function toastStyles() {
    return css `
        lit-toast {
            --lt-bottom: 55%;
            --lt-font-size: 2.2rem;
            --lt-background-color:#ffffff;
            --lt-border-radius:4px;
            --lt-color:	#000000;
            --lt-border: 2px solid #000000;
        }

        lit-toast.error {
            --lt-border: 2px solid #A93226;
            --lt-color:	#A93226;
        }

        lit-toast.warning {
            --lt-border: 2px solid ##DC7633;
            --lt-color:	##DC7633;
        }

        lit-toast.success {
            --lt-border: 2px solid #196F3D;
            --lt-color:	#196F3D;
        }
    `;
}
