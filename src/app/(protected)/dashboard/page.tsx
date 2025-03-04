import { getProfile } from "@/app/actions/auth";
import { Box } from "@mui/material";
export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'EasyGenerator | Dashboard',
    description: 'Dashboard',
}

const DashboardPage = async () => {
    const user = await getProfile()
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" minHeight="50vh" p={8} >
            <Box>
                <h2>Dashboard</h2>
            </Box>
            <Box>
                <p>Welcome {user?.name}!</p>
            </Box>
        </Box>
    )
}

export default DashboardPage