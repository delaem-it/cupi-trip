import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#007aff',
            light: '#bfdeff',
            dark: '#0068d9',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
            contrastText: '#000',
        },
        error: {
            main: '#FF3D00',
        },
        warning: {
            main: '#FFA620',
        },
        info: {
            main: '#007aff',
        },
        success: {
            main: '#60b56e',
        },
        grey: {
            '700': '#33343a',
            '600': '#52545c',
            '500': '#81838e',
            '400': '#a5a7b2',
            '300': '#d5d7e2',
            '200': '#eef0f6',
            '100': '#f3f4fb',
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: [
            '"Exo+2"',
            '"Helvetica Neue"',
            'Roboto',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    //   shadows: [
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //     "none",
    //   ],
    // overrides: {
    //     MuiButtonBase: {
    //         disableRipple: true,
    //         // p: 10,
    //     },
    // },
    components: {
        // MuiButtonBase: {
        //     defaultProps: {
        //         disableRipple: true,
        //     },
        //     // styleOverrides: {
        //     //     root: {
        //     //         textTransform: 'lowercase',
        //     //         borderRadius: 8,
        //     //     },
        //     // },
        // },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                },
            },
        },
    },
});
