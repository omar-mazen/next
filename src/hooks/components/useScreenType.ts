import { useEffect, useState } from "react";

const mobiles = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
];

type ScreenType = "xl" | "lg" | "md" | "sm" | "mobile";

export default function useScreenType(): ScreenType | undefined {
    const [screenType, setScreenType] = useState<ScreenType>();

    useEffect(() => {
        const isMobileUserAgent = () =>
            mobiles.some((regex) => regex.test(navigator.userAgent));

        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= 1280) setScreenType("xl");
            else if (width >= 1024) setScreenType("lg");
            else if (width >= 768) setScreenType("md");
            else if (width >= 640) setScreenType("sm");
            else if (width < 640 || isMobileUserAgent())
                setScreenType("mobile");
        };

        handleResize(); // initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenType;
}
