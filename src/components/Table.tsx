import React from "react";

type TableProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
};

type SectionProps = {
    children: React.ReactNode;
};

type CellProps = {
    children: React.ReactNode;
    head?: boolean;
};

export default function Table({ children, footer }: TableProps) {
    return (
        <div>
            <div
                className={`w-full overflow-x-auto whitespace-nowrap rounded-2xl border-2 border-secondary-background lg:mb-0 ${
                    footer ? "rounded-b-none border-b-0" : ""
                }`}
            >
                <table className="w-full table-auto text-left text-small">
                    {children}
                </table>
            </div>
            {footer && (
                <div className="h-min w-full rounded-b-2xl bg-secondary-background">
                    {footer}
                </div>
            )}
        </div>
    );
}

function Head({ children }: SectionProps) {
    return (
        <thead className="text-nowrap bg-[#2A2D36] h-[76px]">{children}</thead>
    );
}

function Row({ children }: SectionProps) {
    return <tr>{children}</tr>;
}

function Cell({ children, head }: CellProps) {
    if (head) {
        return (
            <th className="max-w-[1500px] overflow-hidden text-ellipsis text-nowrap px-8 py-4 text-start bg-secondary-background">
                {children}
            </th>
        );
    } else {
        return (
            <td className="max-w-[150px] overflow-hidden text-ellipsis text-nowrap px-8 py-4 text-start last-of-type:float-left">
                {children}
            </td>
        );
    }
}

function Body({ children }: SectionProps) {
    return <tbody>{children}</tbody>;
}

function Footer({ children }: SectionProps) {
    return <tfoot className="w-full bg-[#2A2D36]">{children}</tfoot>;
}

// Attach subcomponents to Table
Table.Head = Head;
Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;
Table.Footer = Footer;
