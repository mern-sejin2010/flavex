import { createTheme } from '@mui/material';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#ef5c02',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'text',
            },
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontFamily: 'var(--space-grotesk)',
                    borderRadius: '6px',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: 'var(--primary)',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#000',
                    fontFamily: 'var(--space-grotesk)',
                    fontSize: 15,
                    fontWeight: 400,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: '12px 0px',
                },
            },
        },
    },
});