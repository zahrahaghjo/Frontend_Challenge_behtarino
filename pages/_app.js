import React, { useEffect } from "react";
import App from "next/app";
import SSRProvider from 'react-bootstrap/SSRProvider';
import DefaultLayout from "../components/layouts/DefaultLayout";
import 'bootstrap/dist/css/bootstrap.css';

class CutomApp extends App {
  render(props) {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout ;

    return (
      <>
          <SSRProvider>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </SSRProvider>
      </>
    );
  }
}
export default CutomApp;


