import React from 'react';
import Head from 'next/head';
import '../styles/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Jobs List</title>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default App;