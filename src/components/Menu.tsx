"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    MouseEvent,
    CSSProperties,
} from "react";
import useClickOutside from "@/hooks/components/useClickOutside";
import { createPortal } from "react-dom";
import Link from "next/link";

type Alignment = "right" | "center" | "left";
type Size = "sm" | "md" | "custom";

interface Position {
    x?: number;
    y?: number;
}

interface MenuContextType {
    open: (name: string | false) => void;
    close: () => void;
    position: Position;
    setPosition: (pos: Position) => void;
    openName: string | false;
    alignment: Alignment;
    size: Size;
    fixedPosition: boolean;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export default function Menu({
    children,
    alignment = "right",
    size = "sm",
    fixedPosition = false,
}: {
    children: ReactNode;
    alignment?: Alignment;
    size?: Size;
    fixedPosition?: boolean;
}) {
    const [openName, setOpenName] = useState<string | false>(false);
    const [position, setPosition] = useState<Position>({});
    const open = setOpenName;
    const close = () => setOpenName("");

    return (
        <MenuContext.Provider
            value={{
                open,
                close,
                position,
                setPosition,
                openName,
                alignment,
                size,
                fixedPosition,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}

function Toggle({ children, name }: { children: ReactNode; name: string }) {
    const { close, open, setPosition, openName } = useMenu();
    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        const rect = (e.target as HTMLElement)
            .closest("button")
            ?.getBoundingClientRect();
        if (!rect) return;

        setPosition({
            x: window.innerWidth - (rect.right + rect.left) / 2,
            y: rect.height + rect.y + 8,
        });

        name === openName ? close() : open(name);
    }

    return <button onClick={handleClick}>{children}</button>;
}

function List({ children, name }: { children: ReactNode; name: string }) {
    const { close, position, openName, alignment, size, fixedPosition } =
        useMenu();
    const ref = useClickOutside(
        "click",
        close,
        false
    ) as React.RefObject<HTMLUListElement>;
    if (name !== openName) return null;

    const style: CSSProperties = {
        top: `${position.y}px`,
        right: `${position.x}px`,
    };

    return createPortal(
        <ul
            ref={ref}
            style={style}
            className={`${
                fixedPosition ? "fixed" : "absolute"
            } z-10 bg-secondary-background ${
                size === "sm" ? "w-64" : size === "md" ? "w-96" : "w-[250px]"
            } ${
                alignment === "right"
                    ? "translate-x-[100%]"
                    : alignment === "center"
                    ? "translate-x-[50%]"
                    : ""
            } max-h-[300px] divide-y divide-text-color/20 overflow-y-scroll rounded-lg drop-shadow-md`}
        >
            {children}
        </ul>,
        document.body
    );
}

function Item({
    children,
    icon,
    onClick,
    to = null,
}: {
    children: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    to?: string | null;
}) {
    const { close } = useMenu();

    const content = (
        <div
            className="flex items-center gap-3 px-6 py-4 text-small cursor-pointer hover:backdrop-brightness-90 w-full"
            onClick={() => {
                onClick?.();
                close();
            }}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {children}
            </span>
        </div>
    );

    if (to) {
        return (
            <li>
                <Link href={to}>{content}</Link>
            </li>
        );
    }

    return <li>{content}</li>;
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Item = Item;

function useMenu(): MenuContextType {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a Menu provider");
    }
    return context;
}
