// pages/_app.js
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InitialTransition from '@/pages/Components/InitialTransition';
import '../styles/globals.css';
import Header from '@/pages/Components/Navbar';
import { useRouter } from 'next/router';
import Footer from '@/pages/Components/Footer';

const pageTransition = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  // Reset loadingComplete state on route change start
  useEffect(() => {
    const handleRouteChange = () => {
      setLoadingComplete(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {!loadingComplete && <InitialTransition onLoadingComplete={handleLoadingComplete} />}
      {loadingComplete && (
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', width: '100%', top: 0, left: 0 }}
          >
            <Header />
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default MyApp;
