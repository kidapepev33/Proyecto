import Head from "next/head";
import HomePage from "@/components/site/HomePage";

export default function EnHomePage() {
  return (
    <>
      <Head>
        <title>Fertinyc – Home</title>
        <meta name="description" content="Fertinyc home" />
      </Head>
      <HomePage />
    </>
  );
}
