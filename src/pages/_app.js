import AuthProvider from "@/client/context/Auth/Auth";
import ProtectedRoute from "@/client/context/Auth/ProtectedRoute";
import CustomThemeProvider from "@/client/context/Theme/CustomThemeProvider";
import Layout from "@/client/components/Layout/Layout";
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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectedRoute>
        </AuthProvider>
      </CustomThemeProvider>
    </>
  );
}
