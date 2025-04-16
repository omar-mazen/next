"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/components/useClickOutside";
import useKeystroke from "@/hooks/components/useKeystroke";
import useScreenType from "@/hooks/components/useScreenType";
// import BottomSheetModal from "@/components/BottomSheetModal";
import XIcon from "../icons/XIcon";

// ====================
// Types
// ====================
type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
  bottomSheetScreens: string[];
  modalCloseScreenSize: string[];
};

interface ModalProps {
  children: ReactNode;
  bottomSheetScreens?: string[];
  modalCloseScreenSize?: string[];
}

interface OpenProps {
  children: ReactElement;
  opens: string;
}

interface WindowProps {
  name: string;
  children: ReactElement;
}

// ====================
// Context
// ====================
const ModalContext = createContext<ModalContextType | undefined>(undefined);

function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a Modal provider");
  }
  return context;
}

// ====================
// Provider
// ====================
export default function Modal({
  children,
  bottomSheetScreens = ["mobile"],
  modalCloseScreenSize = [],
}: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const open = (name: string) => setOpenName(name);
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider
      value={{
        openName,
        open,
        close,
        bottomSheetScreens,
        modalCloseScreenSize,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

// ====================
// Open Button Wrapper
// ====================
function Open({ children, opens }: OpenProps) {
  const { open } = useModal();

  return cloneElement(children as ReactElement<any>, {
    onClick: () => open(opens),
  });
}

// ====================
// Modal Window
// ====================
function Window({
  name,
  children,
}: {
  name: string;
  children: ReactElement<{ onCloseModal: () => void }>; // This line is the key
}) {
  const { openName, close, bottomSheetScreens, modalCloseScreenSize } =
    useContext(ModalContext)!;
  const ref = useClickOutside("click", close);
  useKeystroke("Escape", close);
  const screen = useScreenType();

  if (openName !== name) return null;
  if (!screen) return null;

  if (modalCloseScreenSize.includes(screen)) {
    close();
    return null;
  }

  if (bottomSheetScreens.includes(screen)) {
    return (
      // <BottomSheetModal onClose={close} isOpen={openName === name}>
      { children }
      // </BottomSheetModal>
    );
  }

  return createPortal(
    <div className="fixed left-0 top-0 z-[999] min-h-full min-w-full bg-text-color/10 backdrop-blur-[5px] transition-all duration-[0.5s]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="fixed left-1/2 top-1/2 w-full translate-x-[-50%] translate-y-[-50%] overflow-x-hidden overflow-y-scroll rounded-lg bg-primary-background px-16 pb-5 sm:max-h-[80%] sm:w-auto sm:min-w-[500px]"
      >
        <button className="absolute right-4 top-4 p-2" onClick={close}>
          <XIcon />
        </button>
        <div className="w-full py-4">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ====================
// Attaching Components
// ====================
Modal.Open = Open;
Modal.Window = Window;
