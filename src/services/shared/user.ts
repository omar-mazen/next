import { apiPrivate } from "./axios";

// Define roles as a union type
type Role = "client" | "craftsman";

// Define User type if you have a shape, or use `any` for now
type User = any;

// ---------- getUserById ----------
export async function getUserById({
    id,
    role,
}: {
    id: string | number;
    role: Role;
}): Promise<User> {
    try {
        const response = await apiPrivate.post(
            role === "client"
                ? `/api/client/get_user?client_id=${id}`
                : `/api/craftsman/get_user?craftsman_id=${id}`
        );
        return response.data;
    } catch (error: any) {
        console.error(error);
        throw new Error(
            error?.response?.data?.message || "Something went wrong"
        );
    }
}

// ---------- updateInfo ----------
export async function updateInfo({
    id,
    role,
    address,
    description,
    image,
}: {
    id: string | number;
    role: Role;
    address?: string;
    description?: string;
    image?: File;
}): Promise<any> {
    const formdata = new FormData();
    if (address) formdata.append("address", address);
    if (description) formdata.append("description", description);
    if (image) formdata.append("image", image);

    try {
        const response = await apiPrivate.post(
            role === "client"
                ? `/api/client/update-info?client_id=${id}`
                : `/api/craftsman/update-info?craftsman_id=${id}`,
            formdata,
            role === "craftsman"
                ? { headers: { "Content-Type": "multipart/form-data" } }
                : undefined
        );
        return response.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || "Something went wrong"
        );
    }
}

// ---------- updatePassword ----------
export async function updatePassword({
    id,
    role,
    password,
    passwordConfirmation,
}: {
    id: string | number;
    role: Role;
    password: string;
    passwordConfirmation: string;
}): Promise<any> {
    const formdata = new FormData();
    formdata.append("password", password);
    formdata.append("password_confirmation", passwordConfirmation);

    try {
        const response = await apiPrivate.post(
            role === "client"
                ? `/api/client/update-info?client_id=${id}`
                : `/api/craftsman/update-info?craftsman_id=${id}`,
            formdata,
            role === "craftsman"
                ? { headers: { "Content-Type": "multipart/form-data" } }
                : undefined
        );
        return response.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || "Something went wrong"
        );
    }
}
