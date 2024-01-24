import Layout from "../Component/Layout/Layout";
import { GlobalStyle } from "../styles/global.styled";
import CustomThemeProvider from "../Component/CustomThemeProvider/CustomThemeProvider";
import AuthProvider from "../Component/Context/Auth";
import ProtectedRoute from "../Component/Context/ProtectedRoute";
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
