import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

import styles from './card.module.css'

export interface IProps {
  className?: string
}

export function Card({ className, children }: PropsWithChildren<IProps>) {
  return <div className={clsx(styles.card, className)}>{children}</div>
}

export default React.memo(Card)
