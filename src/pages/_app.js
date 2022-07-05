import { AppGlobalState } from "../context/AppGlobalState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppGlobalState>
      <Component {...pageProps} />
    </AppGlobalState>
  );
}

export default MyApp;
