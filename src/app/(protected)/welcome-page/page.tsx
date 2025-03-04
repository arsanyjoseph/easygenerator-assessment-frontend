import { Box, Typography } from "@mui/material"

export const dynamic = 'force-dynamic'

const WelcomePage = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="75vh" >
            <Typography variant="h1">Welcome to the application.</Typography>
        </Box>
    )
}

export default WelcomePage