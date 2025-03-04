import Header from "@/components/Headers/Header/Header"
import { getProfile } from "../actions/auth"

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getProfile()
    return (
        <div>
            <Header user={user} />
            {children}
        </div>
    )
}
