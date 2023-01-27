import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import pattern from "../public/pattern.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </section>
  );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <section className="overflow-hidden lg:relative z-0">
//       <Image
//         className=" absolute"
//         src={pattern} alt="pattern"
//       />
//       <div className="w-[100vw] relative z-10">
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </div>

//     </section>
//   );
// }
