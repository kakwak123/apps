import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import type { CSSProperties } from 'react'

import { APPS } from '@site/src/data/apps'

import styles from './index.module.css'

export default function Home() {
  return (
    <Layout title="Android apps" description="The Android apps Kakwak is building and getting ready to release.">
      <main>
        <header className={styles.intro}>
          <h1 className={styles.title}>Apps by Kakwak</h1>
          <p className={styles.lead}>The Android apps I'm building and getting ready to release. Each one has a page with what it does, where it's up to, and how to get help.</p>
        </header>
        <ul className={styles.stack}>
          {APPS.map((a) => (
            <li key={a.slug}>
              <Link to={`/${a.slug}`} className={styles.band}
                style={{ '--bg': a.colors.bg, '--name': a.colors.name, '--text': a.colors.text } as CSSProperties}>
                <span className={styles.inner}>
                  <span className={styles.name}>{a.name}{a.altName && <span className={styles.alt} lang="ko">{a.altName}</span>}</span>
                  <span className={styles.line}>{a.line}</span>
                  <span className={styles.status}>{a.status}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}
