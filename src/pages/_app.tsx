import Head from "next/head";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { GlobalStyles, lightTheme } from "@/styles/theme.config";
import { ThemeProvider } from "styled-components";
import store from "@/store";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Hodl20" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />

          <QueryClientProvider client={queryClient}>
            <Toaster />
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
