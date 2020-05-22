import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Epa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        what up doe
      </div>
    </Layout>
  );
}
