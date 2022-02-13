import "../styles/globals.css";
import "../styles/styles.scss";
import "nprogress/nprogress.css";
import Head from 'next/head'
import NProgress from "nprogress";
import Router from "next/router";
import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div id="full-app-container">
      <Head>
        <title>Evento</title>
        <meta name="description" content="Gérer vos évènements" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="content-container">
        <div className="content-main">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
