import { GlobalLoading } from "@/components";
import { RouteGuard } from "@/layouts";
import store from "@/store";
import { GlobalStyles, lightTheme } from "@/styles/theme.config";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // the query will not refetch on window focus
            keepPreviousData: true, // any previous data will be kept when fetching new data because the query key changed.
            notifyOnChangeProps: "tracked", // access to properties will be tracked, and the component will only re-render when one of the tracked properties change. (It has been set by default on v4)
            refetchOnReconnect: "always", //  the query will always refetch on reconnect.
          },
        },
      })
  );

  return (
    <>
      <Head>
        <title>Driver admin</title>
        <link rel="shortcut icon" href="/img/oov-logo.svg" />
        <link rel="apple-touch-icon" href="/img/oov-logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Hodl20" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />

          <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
            <RouteGuard>
              <Toaster />
              <Component {...pageProps} />
              <GlobalLoading />
            </RouteGuard>
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
