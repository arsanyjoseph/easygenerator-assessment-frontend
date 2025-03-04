import LoginForm from "@/components/LoginForm/LoginForm"
import { Box } from "@mui/material"
import Image from 'next/image'

export const dynamic = 'force-dynamic'

const LoginPage = () => {
    return (
        <Box display="flex" flexDirection="row-reverse" justifyContent="space-between" alignItems="center" height="100vh" >
            <Box flex={1} >
                <Box borderRadius={2} width={'fit-content'} height={'fit-content'} overflow="hidden" >
                    <Image src={'/loginSide.png'} alt="EasyGenerator" width={600} height={400} style={{ borderRadius: 4, border: '1px solid #ddd', boxSizing: 'border-box', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} blurDataURL='/loginSide.png' />
                </Box>
            </Box>
            <Box p={4} flex={1}>
                <LoginForm />
            </Box>
        </Box>
    )
}

export default LoginPage