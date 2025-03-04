import { verify } from "@/app/actions/auth"
import { Box, CircularProgress, Typography } from "@mui/material"
import { redirect } from "next/navigation"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const VerifyPage = async (props: {
    searchParams: SearchParams
}) => {
    const searchParams = await props.searchParams
    const { token } = searchParams
    if(!token) redirect('/')
    const response = await verify(token as string)
    if(!response?.isVerified) redirect('/')
    if(response?.isVerified) {
        redirect('/login')
    }

    return (
        <Box display="flex" justifyContent="center" flexDirection="column" gap={4} alignItems="center" minHeight="75vh">
            <Typography variant="h2">Verifying User</Typography>
            {token ?
                <>
                    <Box>
                        <Typography variant="body1">Please wait while we verify your user</Typography>
                    </Box>
                    <Box>
                        <CircularProgress size={50} />
                    </Box>
                </>
                : <Box>
                    <Typography variant="body1">Invalid Token</Typography>
                </Box>}
        </Box>
    )
}

export default VerifyPage