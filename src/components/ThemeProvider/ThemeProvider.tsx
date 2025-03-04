'use client'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, CssBaseline } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0a0843',
        },
        secondary: {
            main: '#0000',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const EasyGeneratorThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
);

export default EasyGeneratorThemeProvider;
