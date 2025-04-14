import { apiPrivate } from "../shared/axios";

// Types
interface JobOfferInput {
    id: string;
    title: string;
    images?: File[];
    description: string;
    client_price: number;
    craft_id: string;
    start_date: string;
    end_date: string;
    city: string;
    phone: string;
}

interface DeleteJobOfferInput {
    jobOfferId: string;
}

interface AcceptJobOfferInput {
    handymanId: string;
    jobOfferId: string;
}

interface GetJobOfferInput {
    jobOfferId: string;
}

interface JobOfferData {
    id: number;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    [key: string]: any;
}

interface GetRepliesInput {
    jobOfferId: string;
    pageSize: number;
    page: number;
}

interface GetAllJobOffersInput {
    id: string;
    page: number;
    pageSize: number;
}

// Functions
export async function addJobOffer({
    id,
    title,
    images,
    description,
    client_price,
    craft_id,
    start_date,
    end_date,
    city,
    phone,
}: JobOfferInput): Promise<void> {
    const data = {
        title,
        description,
        client_price,
        craft_id,
        start_date,
        end_date,
        city,
        phone,
    };

    const formData = new FormData();
    for (const key in data) {
        if (data[key as keyof typeof data]) {
            formData.append(key, String(data[key as keyof typeof data]));
        }
    }

    if (images?.length) {
        for (const image of images) {
            formData.append("image[]", image);
        }
    }

    try {
        await apiPrivate.post(
            `/api/client/add_job_offer?client_id=${id}`,
            formData
        );
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Failed to add job offer"
        );
    }
}

export async function deleteJobOffer({
    jobOfferId,
}: DeleteJobOfferInput): Promise<void> {
    try {
        await apiPrivate.post(
            `/api/client/delete_job_offer?job_offer_id=${jobOfferId}`
        );
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Failed to delete job offer"
        );
    }
}

export async function acceptJobOffer({
    handymanId,
    jobOfferId,
}: AcceptJobOfferInput): Promise<void> {
    try {
        await apiPrivate.post(
            `/api/craftsman/add_job?craftsman_id=${handymanId}&job_offer_id=${jobOfferId}`
        );
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Failed to accept job offer"
        );
    }
}

export async function getJobOffer({
    jobOfferId,
}: GetJobOfferInput): Promise<JobOfferData> {
    try {
        const response = await apiPrivate.post(
            `/api/client/get_job_offer?job_offer_id=${jobOfferId}`
        );
        return response.data.data[0];
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Failed to fetch job offer"
        );
    }
}

export async function getJobOfferReplies({
    jobOfferId,
    pageSize,
    page,
}: GetRepliesInput): Promise<{
    data: any[];
    latestPage: number;
    title: string;
}> {
    try {
        const response = await apiPrivate.post(
            `/api/client/get_job_offer_replies?job_offer_id=${jobOfferId}&pagination=${pageSize}&page=${page}`
        );
        const data = response.data.data;
        return {
            data: data.replies.data,
            latestPage: data.replies.last_page,
            title: data.job_offer_title,
        };
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Failed to fetch replies"
        );
    }
}

export async function getAllJobOffers({
    id,
    page,
    pageSize,
}: GetAllJobOffersInput): Promise<{ data: JobOfferData[] }> {
    // Mocked version (replace with actual API call if needed)
    await new Promise((res) => setTimeout(res, 300));

    const fakeData: JobOfferData[] = Array.from(
        { length: pageSize },
        (_, i) => ({
            id: i + 1 + (page - 1) * pageSize,
            title: `عرض رقم ${i + 1}`,
            description: `وصف عرض رقم ${i + 1} لعميل ${id}`,
            start_date: new Date(),
            end_date: new Date(),
        })
    );

    return {
        data: fakeData,
    };
}
