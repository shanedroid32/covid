import App from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class CovidApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>🦠 COVID-19 Stats</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
