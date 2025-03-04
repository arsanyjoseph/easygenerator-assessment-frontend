import Header from "@/components/Headers/Header/Header"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header isLoggedIn={false} />
            {children}
        </div>
    )
}
