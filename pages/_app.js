import { AppContextProvider } from '@/context/appcontext';
import '@/styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ToastContainer />
      <Component {...pageProps} />

    </AppContextProvider>
  );
}
