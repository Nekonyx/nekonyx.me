import Card from '@/components/card'
import Link from '@/components/link'

import classes from './page.module.css'

export default function Page() {
  return (
    <main className={classes.container}>
      <Card>
        <h1 className={classes.card__heading}>NEKONYX</h1>
        <div className={classes.card__links}>
          <Link className={classes.link} href="https://t.me/nekonyx" target="_blank">
            tg: @nekonyx
          </Link>
        </div>
      </Card>
    </main>
  )
}
