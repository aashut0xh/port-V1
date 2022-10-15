import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#011627" />
          <link
            rel="preload"
            href="https://res.cloudinary.com/dekgw9knc/image/upload/v1664555208/samples/photo_2022-09-30_21-55-03_hgvptc.jpg"
            as="image"
          />
          {/* Meta Description = Search Engines, OG Descriptions = Social media */}
          {/* og meta */}
          <meta property="og:title" content="aashut0xh" />
          <meta
            property="og:url"
            content=""
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dekgw9knc/image/upload/v1664555208/samples/photo_2022-09-30_21-55-03_hgvptc.jpg"
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="." />
          <meta
            property="og:description"
            content="I craft interactive and beautiful web apps, and I love what I do. View my projects"
          />
          <meta
            name="description"
            content="I craft interactive and beautiful web apps, and I love what I do. View my projects"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:domain"
            content="."
          />
          <meta
            property="twitter:url"
            content="."
          />
          <meta name="twitter:creator" content="@aashut0xh" />
          <meta name="twitter:title" content="Liplan aashut0xh - Portfolio" />
          <meta
            name="twitter:description"
            content="I craft interactive and beautiful web apps, and I love what I do. View my projects"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dekgw9knc/image/upload/v1664555208/samples/photo_2022-09-30_21-55-03_hgvptc.jpg"
          />
          {/* pwa tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Liplan aashut0xh - Portfolio"
          />
          <meta
            name="description"
            content="Where the world connects with future talent"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="application-name"
            content="Liplan aashut0xh - Portfolio"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content="#011627" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {
            // TODO: add iOS splash screens
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
