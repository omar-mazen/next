import { ReactNode } from "react";
import { Sheet } from "react-modal-sheet";

interface BottomSheetModalProps {
    isOpen: boolean;
    header?: ReactNode;
    onClose: () => void;
    children: ReactNode;
    containerAdditionalStyle?: string;
}

export default function BottomSheetModal({
    isOpen,
    header,
    onClose,
    children,
    containerAdditionalStyle,
}: BottomSheetModalProps) {
    return (
        isOpen && (
            <Sheet
                isOpen={isOpen}
                onClose={onClose}
                detent="content-height"
                tweenConfig={{ ease: "easeInOut", duration: 1 }}
            >
                <Sheet.Backdrop
                    onTap={(e) => e.preventDefault()}
                    className="!bg-text-color/10 backdrop-blur-[2px]"
                />
                <Sheet.Container
                    style={{ borderRadius: "30px 30px 0 0" }}
                    className={`w-full !bg-primary-background ${
                        containerAdditionalStyle ?? ""
                    }`}
                >
                    <span className="absolute left-1/2 top-2 h-[5px] w-[70px] translate-x-[-50%] cursor-pointer rounded-full bg-gray"></span>
                    {header ? (
                        <Sheet.Header className="pt-6 text-center">
                            {header}
                        </Sheet.Header>
                    ) : null}
                    <Sheet.Content className="container flex w-full flex-col gap-10 overflow-y-auto pt-12 text-xl">
                        <Sheet.Scroller>{children}</Sheet.Scroller>
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        )
    );
}
