import Footer from "./footer";
import Header from "./header";
import { useEffect } from "react";
import mainScriptFront from "./mainScriptFront";
export default function Layout({ children }) {
  useEffect(() => {
    mainScriptFront();
  }, []);
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
