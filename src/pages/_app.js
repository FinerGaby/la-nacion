import "@/styles/globals.css";
import { MainLayout } from "../../common/layout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
