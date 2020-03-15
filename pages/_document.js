import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CoronaDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta charSet='UTF-8' />
          <meta
            name='description'
            content='A website to display statistics about Coronavirus 2019 (COVID-19)'
          />
          <meta
            name='keywords'
            content='coronavirus,corona,covid-19,covid,virus,2020,toilet paper'
          />
          <meta name='author' content='Shane M. Ross' />
          <link
            rel='stylesheet'
            href='https://unpkg.com/modern-css-reset/dist/reset.min.css'
          />
          <script
            src='https://kit.fontawesome.com/ada1a9d1cf.js'
            crossorigin='anonymous'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
