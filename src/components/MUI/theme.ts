import { createTheme } from '@mui/material';
import styles from '../../styles/style.module.scss';

export const theme = createTheme({
    palette: {
        primary: {
            main: styles.primaryColor,
        },
    },
    typography: {
        allVariants: {
            fontFamily: styles.mainFont,
            fontSize: styles.fontSize,
        },
    },
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: styles.accentColorLight,
                    color: styles.secondaryColor,
                    borderRadius: 4,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: styles.accentColorLight,
                },
            },
        },
    },
});
