import React from 'react';
import Container from '@mui/material/Container';
import Title from '../components/title';
import Footer from '../components/footer';
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    typography: {
        fontFamily: [
            '"Segoe UI"',
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h2: {
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        }
    },
    palette: {
        primary: {
            main: '#7FB241',
        },
        secondary: {
            main: '#f50057',
        }
    },
});


interface LayoutProps {

}

interface LayoutState {

}

class Layout extends React.Component<LayoutProps, LayoutState> {
    state = {
        isSearching: false,
        searchResults: null,
        postcodeCoordinates: null,
        hasResult: false
    }

    render() {
        return (
            <ThemeProvider theme={appTheme}>
                <Container maxWidth="lg">
                    <Title />
                    <Outlet />
                    <Footer />
                </Container>
            </ThemeProvider>
        );
    }
}

export default Layout;