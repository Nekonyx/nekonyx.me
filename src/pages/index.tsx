import Card from '@/components/card'
import Link from '@/components/link'

import styles from './index.module.css'

export default function IndexPage() {
  return (
    <main className={styles.container}>
      <Card>
        <h1 className={styles.card__heading}>NEKONYX</h1>
        <div className={styles.card__links}>
          <Link className={styles.link} href="https://t.me/nekonyx" target="_blank">
            tg: @nekonyx
          </Link>
        </div>
      </Card>
    </main>
  )
}
