import React from 'react';
import App, { Container } from 'next/app';
import DeviceContext from '../contexts/DeviceContext';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, deviceProps: ctx.req.client };
  }

  render() {
    const { Component, pageProps, deviceProps } = this.props;

    return (
      <Container>
        <DeviceContext.Provider value={deviceProps}>
            <Component {...pageProps} />
        </DeviceContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
