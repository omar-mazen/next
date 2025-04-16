"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/components/useWindowResize";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";

type PaginationProps = {
    total: number;
};

export default function Pagination({ total }: PaginationProps) {
    const size = useWindowSize();
    const containerRef = useRef<HTMLUListElement>(null);
    const pageRef = useRef<HTMLSpanElement>(null);
    const [available, setAvailable] = useState<number>(0);

    const router = useRouter();
    const searchParams = useSearchParams();
    const currPage = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        if (containerRef.current && pageRef.current) {
            const containerWidth =
                containerRef.current.getBoundingClientRect().width;
            const pageWidth = pageRef.current.getBoundingClientRect().width;
            if (pageWidth) {
                setAvailable(Math.floor(containerWidth / pageWidth));
            }
        }
    }, [size, containerRef.current, pageRef.current]);

    function setPage(page: number) {
        if (page < 1 || page > total) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="flex items-center bg-secondary-background rounded-2xl">
            <span
                ref={pageRef}
                onClick={() => setPage(currPage - 1)}
                className={`flex min-w-20 items-center justify-center bg-secondary-background ${
                    currPage === 1
                        ? "cursor-not-allowed text-text-color/20"
                        : ""
                }`}
            >
                <ArrowRightIcon className="w-6 h-6" />
            </span>

            <ul
                ref={containerRef}
                className="flex w-full content-center items-center bg-secondary-background text-medium"
            >
                {Array.from({ length: available }, (_, i) => {
                    const currentGroup = Math.floor((currPage - 1) / available);
                    const page = currentGroup * available + i + 1;
                    if (page > total) return null;

                    return (
                        <li
                            key={page}
                            onClick={() => setPage(page)}
                            className={`flex min-h-20 min-w-20 cursor-pointer items-center justify-center rounded-lg ${
                                currPage === page
                                    ? "relative z-[2] before:absolute before:right-1/2 before:top-1/2 before:z-[-1] before:h-12 before:w-12 before:translate-x-[50%] before:translate-y-[-50%] before:rounded-full before:bg-primary-color"
                                    : ""
                            }`}
                        >
                            {page}
                        </li>
                    );
                })}
            </ul>

            <span
                onClick={() => setPage(currPage + 1)}
                className={`flex min-w-20 items-center justify-center bg-secondary-background ${
                    currPage === total
                        ? "cursor-not-allowed text-text-color/20"
                        : ""
                }`}
            >
                <ArrowLeftIcon className="w-6 h-6" />
            </span>
        </div>
    );
}
