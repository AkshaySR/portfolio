import React from 'react';
import App, { Container } from 'next/app';
import auth0 from '../services/auth0';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp