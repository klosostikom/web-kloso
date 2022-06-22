import Footer from "./footer";
import Header from "./header";
import Preloader from "./preload";
import Script from "next/script";

export default function Layout({children}){
    return(
        <>
        <Preloader />
        <Header />
        <main className="container">
            {children}
        </main>
        <Footer />
        <Script src="/assets/js/main.js" />
        </>
    )
}