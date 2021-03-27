import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WatsApp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Lets build WatsApp 2.0</h1>
    </div>
  );
}
