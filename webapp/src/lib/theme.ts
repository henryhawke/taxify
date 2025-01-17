import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7c3aed',
            light: '#9d5cf5',
            dark: '#6025c9',
        },
        secondary: {
            main: '#10b981',
            light: '#34d399',
            dark: '#059669',
        },
        background: {
            default: '#0f172a',
            paper: '#1e293b',
        },
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        subtitle1: {
            fontWeight: 500,
        },
        subtitle2: {
            fontWeight: 500,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#1e293b",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#475569",
                        minHeight: 24,
                        border: "3px solid #1e293b",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#64748b",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#64748b",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#64748b",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#1e293b",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundImage: 'none',
                    backgroundColor: '#1e293b',
                    borderRight: '1px solid #334155',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                },
            },
        },
    },
    shape: {
        borderRadius: 8,
    },
}) 