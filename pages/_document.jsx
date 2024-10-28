// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ahmad Hassan | Web Development Portfolio specializing in WordPress and Shopify</title>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="google" content="notranslate" />
        <meta name="description" content="Explore Ahmad Hassan's projects specializing in WordPress and Shopify at rizvidev.site." />
        <meta name="keywords" content="Ahmad Hassan, rizvidev.site, web development, WordPress, Shopify, portfolio, e-commerce, website design, custom websites, online solutions" />
        <meta name="google-site-verification" content="QWXwooAVdPxDBPua7NU3jA_EwzSIJjX7TaoWB12NzRo" />
        <meta property="og:title" content="Ahmad Hassan | Web Development Portfolio" />
        <meta property="og:description" content="Explore Ahmad Hassan's projects specializing in WordPress and Shopify at rizvidev.site." />
        <meta property="og:image" content="https://rizvidev.site/assets/hero1.png" /> 
        <meta property="og:url" content="https://rizvidev.site" />
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rizvidev.site" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
