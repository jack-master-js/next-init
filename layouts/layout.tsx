import Head from 'next/head'

import styles from './layout.module.css'

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Next-Init</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>layout</div>
      <main className={styles.container}>{children}</main>
    </>
  )
}
