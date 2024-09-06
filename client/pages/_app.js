import "@/styles/globals.css";
import Navbar from '../components/Navbar.jsx'
import {AuthProvider} from '@/context/auth';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
