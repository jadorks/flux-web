import Head from "next/head";
import React from "react";
import Chatbot from "../Chatbot";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Flux</title>
      </Head>
      <Navbar />
      <Chatbot />
      <main>{children}</main>
      <Footer />
    </>
  );
}
