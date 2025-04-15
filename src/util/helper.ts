import {
    differenceInDays,
    differenceInMonths,
    differenceInYears,
} from "date-fns";

export function setCookie(key: string, value: string): void {
    document.cookie = `${key}=${value};`;
}

export function getCookie(key: string): string | null {
    const cookieArray = document.cookie.split(";");
    const keyEquals = key + "=";
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.startsWith(keyEquals)) {
            return cookie.substring(keyEquals.length);
        }
    }
    return null;
}

export function deleteCookie(key: string): Promise<void> {
    return new Promise((res) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        res();
    });
}

export function joinDate({ date }: { date: Date }): string {
    const now = new Date();

    const joinDate = {
        inYear: differenceInYears(now, date),
        inMonth: differenceInMonths(now, date),
        inDay: differenceInDays(now, date),
    };

    return joinDate.inYear
        ? `${joinDate.inYear} سنه`
        : joinDate.inMonth
        ? `${joinDate.inMonth} شهر`
        : `${joinDate.inDay} يوم`;
}
