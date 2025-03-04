import Header from "@/components/Headers/Header/Header";
import { ReactNode } from "react";
import { getProfile } from "../actions/auth";

export default async function ProtectedLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await getProfile()
    return (
        <div>
            <Header user={user} />
            {children}
        </div>
    )
}