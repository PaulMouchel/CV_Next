import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Layout from '../components/Layout';
import { init } from 'emailjs-com';
import { AnimateSharedLayout } from "framer-motion";

init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Layout>
        <AnimateSharedLayout>
          <Component {...pageProps} />{" "}
        </AnimateSharedLayout>
      </Layout>
    </div>
  );
}

export default MyApp
