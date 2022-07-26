import Footer from "./footer";
import Header from "./header";
import Script from "next/script";
import { useEffect } from "react";
import mainScriptFront from "./mainScriptFront";
export default function Layout({ children }) {
  useEffect(() => {
    mainScriptFront();
  }, []);
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
