import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Layout from '../components/Layout';
import{ init } from 'emailjs-com';

init(process.env.REACT_APP_EMAILJS_USER_ID);


function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </div>
  );
}

export default MyApp
