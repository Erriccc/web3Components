import { useState } from 'react';
import Head from 'next/head';
import { QueryClient } from 'react-query';
import { ThemeProvider } from 'next-themes';
import ModalsContainer from '/components/modal-views/container';
import DrawersContainer from '/components/drawer-views/container';
import SettingsButton from '/components/settings/settings-button';
import PageDrawer from '/components/settings/page-drawer';
import SettingsDrawer from '/components/settings/settings-drawer';
import { WalletProvider } from 'lib/hooks/use-connect';
import { MoralisProvider } from "react-moralis";
import {NotificationProvider} from "web3uikit";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
// base css file
import 'swiper/css';
import 'assets/css/scrollbar.css';
import 'assets/css/globals.css';
import 'assets/css/range-slider.css';
function CustomApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient());

    const progress = new ProgressBar({
      size: 3,
      color: "#8ECAF7",
      className: "z-50",
      delay: 100,
    });
    Router.events.on("routeChangeStart", progress.start);
    Router.events.on("routeChangeComplete", progress.finish);
    Router.events.on("routeChangeError", progress.finish);
    
    const MoralisAppId = "h8ifmoTkY0X7KYU7AQsyIefDFah4JKqWDxCGEpTZ";
    const MoralisAppUrl = "https://8lyygoh4vp0d.usemoralis.com:2053/server";
    // const getLayout = Component.getLayout ?? ((page) => page);

    //could remove this if you don't need to page level layout
    return (<>
      <Head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1"/>
      </Head>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <MoralisProvider
              // appId= {MoralisAppId}
      // serverUrl={MoralisAppUrl}
      initializeOnMount={false}>
                 <NotificationProvider>
              <WalletProvider>
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">

                    {/* {getLayout( */}
                    <Component {...pageProps}/>
                    
                    {/* )} */}
                    <SettingsButton />
                    {/* <PageDrawer /> */}
                    <SettingsDrawer />
                    <ModalsContainer />
                    <DrawersContainer />

        </ThemeProvider>
        </WalletProvider>

          </NotificationProvider>
        </MoralisProvider>


        {/* </Hydrate> */}
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      {/* </QueryClientProvider> */}
    </>);
}
export default CustomApp;
