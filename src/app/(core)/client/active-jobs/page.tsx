import Table from "@/components/Table";
import Link from "next/link";
import { formatISO } from "date-fns";
import Pagination from "@/components/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "المهام النشطة",
};

const data = {
    data: [
        {
            id: 1,
            title: "تصميم موقع إلكتروني",
            description: "مطلوب تصميم موقع احترافي لشركة ناشئة.",
            start_date: new Date("2025-04-01"),
            end_date: new Date("2025-04-15"),
        },
        {
            id: 2,
            title: "تطوير تطبيق موبايل",
            description: "بناء تطبيق مخصص لمتابعة اللياقة البدنية.",
            start_date: new Date("2025-04-10"),
            end_date: new Date("2025-05-01"),
        },
        {
            id: 3,
            title: "كتابة محتوى تسويقي",
            description: "كتابة مقالات تسويقية لمنتج إلكتروني جديد.",
            start_date: new Date("2025-04-12"),
            end_date: new Date("2025-04-20"),
        },
    ],
    latestPage: 5,
};

const page = () => {
    return (
        <div className="custom-container">
            <h1 className="font-bold mb-10 mt-5">المهام النشطة</h1>
            <Table footer={data?.latestPage ? <Pagination total={1} /> : null}>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell head={true}>العنوان</Table.Cell>
                        <Table.Cell head={true}>الوصف</Table.Cell>
                        <Table.Cell head={true}>تاريخ البدأ</Table.Cell>
                        <Table.Cell head={true}>تاريخ الانتهاء</Table.Cell>
                        <Table.Cell head={true}></Table.Cell>
                    </Table.Row>
                </Table.Head>
                {data?.data?.length > 0 && (
                    <Table.Body>
                        {data.data.map((offer, i) => (
                            <Table.Row key={i}>
                                <Table.Cell head={false}>
                                    <Link
                                        href={`/client/job/active/${offer.id}`}
                                    >
                                        {offer.title}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell head={false}>
                                    {offer.description}{" "}
                                </Table.Cell>
                                <Table.Cell head={false}>
                                    {formatISO(offer.start_date, {
                                        representation: "date",
                                    })}
                                </Table.Cell>
                                <Table.Cell head={false}>
                                    {formatISO(offer.end_date, {
                                        representation: "date",
                                    })}
                                </Table.Cell>
                                <Table.Cell head={false}> </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                )}
            </Table>
        </div>
    );
};

export default page;
