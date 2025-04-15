import axios from "axios";

// Get token from cookies using plain JavaScript (only in the browser)
function getTokenFromCookie() {
    if (typeof window === "undefined") return null;

    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
}

const token = getTokenFromCookie();

// Lines 2 and 4 to be removed when the backend is connected.

export const apiPrivate = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: token
        ? {
              Authorization: `Bearer ${token}`,
          }
        : {},
});
