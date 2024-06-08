import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

NProgress.configure({
  showSpinner: false,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const routeChangeStartHandler = () => {
      NProgress.start();
    };

    const routeChangeCompleteHandler = () => {
      NProgress.done();
    };

    const routeChangeErrorHandler = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", routeChangeStartHandler);

    router.events.on("routeChangeComplete", routeChangeCompleteHandler);

    router.events.on("routeChangeError", routeChangeErrorHandler);

    return () => {
      router.events.off("routeChangeStart", routeChangeStartHandler);

      router.events.off("routeChangeComplete", routeChangeCompleteHandler);

      router.events.off("routeChangeError", routeChangeErrorHandler);
    };
  }, [router]);

  return (
    <div className={inter.variable}>
      <header className="fixed z-50 w-full p-4 flex justify-center gap-4 items-center">
        <Badge className="bg-green-500 pointer-events-none">SSR</Badge>
        <Badge className="bg-yellow-500 pointer-events-none">SSG</Badge>
        <Badge className="bg-red-500 pointer-events-none">SSR (Old)</Badge>
      </header>
      <div className="pt-20 container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
