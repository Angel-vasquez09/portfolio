import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#13304f',
        },
        background: {
            default: '#01204C',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {

            },
            styleOverrides: {
                root: {
                    borderRadius: 0
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(180deg, #0a0a24, transparent)',
                }
            },
            defaultProps: {
                elevation: 0,
                position: 'fixed',
            }
        }
    },
    typography: {
        fontFamily: '"Cascadia Code", "Helvetica", "Arial", sans-serif',
        button: {
            fontFamily: 'Cascadia Code',
            borderRadius: '0px !important'
        }
    }
});