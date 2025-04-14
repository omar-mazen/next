"use client";

import React from "react";
import { formatDate, formatISO } from "date-fns";
import MoreInfoIcon from "@/icons/MoreInfoIcon";
import ThreeDots from "@/icons/ThreeDots";
import ConfirmDelete from "@/components/ConfirmDelete";
import FullPageLoading from "@/components/FullPageLoading";
import Menu from "@/components/Menu";
import Modal from "@/components/Modal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TrashIcon from "@/icons/TrashIcon";
import useGetAllJobOffers from "@/hooks/client/useGetAllJobOffers";
import useDeleteJobOffer from "@/hooks/client/useDeleteJobOffer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const data = {
    data: [
        {
            id: 1,
            title: "تصميم موقع إلكتروني",
            description: "مطلوب تصميم موقع احترافي لشركة ناشئة.",
            start_date: new Date("2025-04-01"),
            end_date: new Date("2025-04-15"),
            created_at: new Date("2025-03-01"),
        },
        {
            id: 2,
            title: "تطوير تطبيق موبايل",
            description: "بناء تطبيق مخصص لمتابعة اللياقة البدنية.",
            start_date: new Date("2025-04-10"),
            end_date: new Date("2025-05-01"),
            created_at: new Date("2025-03-15"),
        },
        {
            id: 3,
            title: "كتابة محتوى تسويقي",
            description: "كتابة مقالات تسويقية لمنتج إلكتروني جديد.",
            start_date: new Date("2025-04-12"),
            end_date: new Date("2025-04-20"),
            created_at: new Date("2025-03-20"),
        },
    ],
    latestPage: 5, // Add the latestPage to support pagination
};

export default function JobOffers() {
    const router = useRouter();
    // const { data, isLoading, isFetched } = useGetAllJobOffers();
    const isLoading = false;
    const isFetched = true;
    const { deleteJobOffer } = useDeleteJobOffer();
    if (isLoading) return <FullPageLoading />;
    return (
        <Modal bottomSheetScreens={[]} modalCloseScreenSize={[]}>
            <Menu>
                <div className="custom-container">
                    <h1 className="font-bold mb-10 mt-5">
                        عروض العمل الخاصة بك{" "}
                    </h1>

                    {isFetched && data?.data?.length > 0 ? (
                        <Table
                            footer={
                                data?.latestPage ? (
                                    <Pagination total={1} />
                                ) : null
                            }
                        >
                            <Table.Head>
                                <Table.Row>
                                    <Table.Cell head={true}>العنوان</Table.Cell>
                                    <Table.Cell head={true}>الوصف</Table.Cell>
                                    <Table.Cell head={true}>
                                        تاريخ البدأ
                                    </Table.Cell>
                                    <Table.Cell head={true}>
                                        تاريخ الانتهاء
                                    </Table.Cell>
                                    <Table.Cell head={true}></Table.Cell>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                {data?.data.map((offer, i) => (
                                    <React.Fragment key={offer.id}>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Link
                                                    href={`/client/job-offer/${offer.id}`}
                                                >
                                                    {offer.title}
                                                </Link>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {offer.description}{" "}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {formatISO(offer.created_at, {
                                                    representation: "date",
                                                })}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {formatISO(offer.created_at, {
                                                    representation: "date",
                                                })}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Menu.Toggle
                                                    name={`opens-${offer?.id}`}
                                                >
                                                    <ThreeDots />
                                                </Menu.Toggle>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Menu.List name={`opens-${offer?.id}`}>
                                            <Modal.Open
                                                opens={`delete-${offer?.id}`}
                                            >
                                                <Menu.Item
                                                    icon={
                                                        <TrashIcon size={20} />
                                                    }
                                                >
                                                    حذف
                                                </Menu.Item>
                                            </Modal.Open>
                                            <Menu.Item
                                                onClick={() =>
                                                    router.push(
                                                        `/client/job-offer/${offer?.id}`
                                                    )
                                                }
                                                icon={
                                                    <MoreInfoIcon size={20} />
                                                }
                                            >
                                                المزيد
                                            </Menu.Item>
                                        </Menu.List>
                                        <Modal.Window
                                            name={`delete-${offer?.id}`}
                                        >
                                            <ConfirmDelete
                                                resourceName={`طلبك " ${offer?.title} "`}
                                                onConfirm={() =>
                                                    deleteJobOffer(offer?.id)
                                                }
                                            />
                                        </Modal.Window>
                                    </React.Fragment>
                                ))}
                            </Table.Body>
                        </Table>
                    ) : (
                        <p>لا يوجد عروض عمل خاصه بك حتي الان</p>
                    )}
                </div>
            </Menu>
        </Modal>
    );
}
