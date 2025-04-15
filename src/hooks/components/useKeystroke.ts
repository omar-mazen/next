import { useEffect } from "react";

export default function useKeystroke(
    key: string,
    handler: () => void,
    targetElement?: Document | HTMLElement | null
) {
    useEffect(() => {
        const element =
            targetElement ??
            (typeof document !== "undefined" ? document : null);

        if (!element) return;

        const handleKey = (e: KeyboardEvent): void => {
            if (e.key === key) handler();
        };

        element.addEventListener("keydown", handleKey as EventListener);
        return () =>
            element.removeEventListener("keydown", handleKey as EventListener);
    }, [handler, key, targetElement]);
}
