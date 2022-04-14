import store from "@/store";
import { GlobalStyles, lightTheme } from "@/styles/theme.config";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
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
        <title>
          Livraison de Médicaments et Parapharmacie à domicile | Livmed’s
        </title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Faites-vous livrer vos médicaments en 30 min, avec ou sans ordonnance. Service 7j/24h. Un large choix de pharmacies sur Paris, Marseille, Lyon, Toulouse, Nice, Strasbourg, Bordeaux, Lille, Nantes, Montpellier, Rennes..."
        />
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

export default appWithTranslation(MyApp);
