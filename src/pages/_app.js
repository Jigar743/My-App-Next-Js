import AuthProvider from "@/client/context/Auth/Auth";
import ProtectedRoute from "@/client/context/Auth/ProtectedRoute";
import CustomThemeProvider from "@/client/context/Theme/CustomThemeProvider";
import Layout from "@/client/components/Layout/Layout";
import { GlobalStyle } from "@/client/styles/global.styled";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Next js app</title>
      </Head>
      <CustomThemeProvider>
        <AuthProvider>
          <ProtectedRoute>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectedRoute>
        </AuthProvider>
      </CustomThemeProvider>
    </>
  );
}
