import ChangeButton from "@/components/ChangeButton";
import Head from "next/head";
import { ReactNode } from "react";
import { NavBar, Footer } from "../components";

type Props = {
  title: string;
  children?: ReactNode;
};

export const Layout = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Xiza Portfolio" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    </Head>
    <main className="bg-base-100 dark:bg-dark-base-100 text-dark-100 max-w-full">
      <ChangeButton />
      <NavBar />
      <div className="pt-20 md:pt-24 max-w-full">{children}</div>
      <Footer />
    </main>
  </>
);
