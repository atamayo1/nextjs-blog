import Head from 'next/head'
import Layout, { siteTitle, selfIntroduction } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p className={utilStyles.justifyText}>{selfIntroduction}</p>
            <h2>
                <Link href="/posts/first-post">
                    <a>Next first post</a>
                </Link>
            </h2>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}