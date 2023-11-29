import Head from "next/head";
import dynamic from "next/dynamic";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
// styles
import "styles/globals.css";
import "styles/editor.css";
import "styles/command-pallette.css";
import "styles/nprogress.css";
import "styles/react-datepicker.css";
// contexts
import { ToastContextProvider } from "contexts/toast.context";
// types
import type { AppProps } from "next/app";
// constants
import { THEMES } from "constants/themes";
// constants
import { SITE_TITLE } from "constants/seo-variables";
// mobx store provider
import { MobxStoreProvider } from "lib/mobx/store-provider";
import MobxStoreInit from "lib/mobx/store-init";

const CrispWithNoSSR = dynamic(() => import("constants/crisp"), { ssr: false });

// nprogress
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="https://ik.imagekit.io/rb2mket51/crew-fav-150.png?updatedAt=1701009794656" sizes="32x32" />
        <link rel="icon" href="https://ik.imagekit.io/rb2mket51/crew-fav-300.png?updatedAt=1701009794755" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/rb2mket51/crew-fav-300.png?updatedAt=1701009794755" />
        <meta name="msapplication-TileImage" content="https://ik.imagekit.io/rb2mket51/crew-fav-300.png?updatedAt=1701009794755" />
      </Head>
      <MobxStoreProvider {...pageProps}>
        <ThemeProvider themes={THEMES} defaultTheme="system">
          <ToastContextProvider>
            <CrispWithNoSSR />
            <MobxStoreInit />
            <Component {...pageProps} />
          </ToastContextProvider>
        </ThemeProvider>
      </MobxStoreProvider>
    </>
  );
}

export default MyApp;
