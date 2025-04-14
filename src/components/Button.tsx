import { ReactNode, MouseEvent } from "react";

type ButtonStyle = "primary" | "round" | "outline";
type ButtonSize = "small" | "medium" | "large" | "block";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    style?: ButtonStyle;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    additionalStyle?: string;
    capitalize?: boolean;
}

export default function Button({
    type = "button",
    style = "primary",
    size = "medium",
    disabled = false,
    children,
    onClick,
    additionalStyle = "",
    capitalize = false,
}: ButtonProps) {
    const base =
        "bg-primary-color text-white rounded-full flex items-center justify-center drop-shadow-lg";

    const btnSize: Record<ButtonSize, string> = {
        small: "w-[48px] h-[24px] px-[16px] py-1 text-small tracking-wide box-content",
        medium: "w-[56px] h-[24px] px-[24px] py-1 text-medium tracking-wide box-content",
        large: "w-[66px] h-[24px] px-[32px] py-1 text-medium tracking-wide font-medium box-content",
        block: "w-full h-[44px] px-[16px] text-medium",
    };

    const btnStyle: Record<ButtonStyle, string> = {
        primary: `${base} ${btnSize[size]}`,
        round: `${base} h-[28px] aspect-square p-[4px] text-small`,
        outline: `flex items-center justify-center drop-shadow-lg box-content border border-1 rounded-full ${btnSize[size]}`,
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`relative cursor-pointer ${
                btnStyle[style]
            } ${additionalStyle} ${capitalize ? "capitalize" : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
