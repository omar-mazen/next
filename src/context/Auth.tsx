"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { getCookie } from "../util/helper";
import { getUserById } from "@/services/shared/user";

// Define the shape of your user (customize as needed)
interface User {
    id: string;
    role: string;
    [key: string]: any;
}

interface AuthContextType {
    isAuth: boolean;
    role: string;
    id: string;
    user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const id =
        getCookie("token") && typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "{}")?.id ?? ""
            : "";

    const role =
        getCookie("token") && typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "{}")?.role ?? ""
            : "";

    const [auth, setAuth] = useState<AuthContextType>({
        isAuth: Boolean(getCookie("token")),
        role,
        id,
        user: null,
    });

    useEffect(() => {
        async function getUser() {
            if (id) {
                try {
                    const user = await getUserById({ id, role });
                    setAuth((prev) => ({ ...prev, user }));
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            }
        }

        getUser();
    }, [id, role]);

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Custom hook for accessing auth context
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
