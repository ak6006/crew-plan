import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// styles
import "styles/globals.css";
import "styles/editor.css";
// contexts
import { ToastContextProvider } from "contexts/toast.context";
// mobx store provider
import { MobxStoreProvider } from "lib/mobx/store-provider";
import MobxStoreInit from "lib/mobx/store-init";
// constants
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, TWITTER_USER_NAME, SITE_KEYWORDS, SITE_TITLE } from "constants/seo";

const prefix = parseInt(process.env.NEXT_PUBLIC_DEPLOY_WITH_NGINX || "0") === 0 ? "/" : "/spaces/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobxStoreProvider>
      <MobxStoreInit />
      <Head>
        <title>{SITE_TITLE}</title>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
        {/* <link rel="apple-touch-icon" sizes="180x180" href={`${prefix}favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${prefix}favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${prefix}favicon/favicon-16x16.png`} /> */}
        <link rel="icon" href="https://ik.imagekit.io/rb2mket51/crew-fav-150.png?updatedAt=1701009794656" sizes="32x32" />
        <link rel="icon" href="https://ik.imagekit.io/rb2mket51/crew-fav-300.png?updatedAt=1701009794755" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/rb2mket51/crew-fav-300.png?updatedAt=1701009794755" />
        <meta name="msapplication-TileImage" content="https://ik.imagekit.io/rb2mket51/crew-fav-300.png?updatedAt=1701009794755" />


        <link rel="manifest" href={`${prefix}site.webmanifest.json`} />
        {/* <link rel="shortcut icon" href={`${prefix}favicon/favicon.ico`} /> */}
      </Head>
      <ToastContextProvider>
        <ThemeProvider themes={["light", "dark"]} defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </ToastContextProvider>
    </MobxStoreProvider>
  );
}

export default MyApp;
