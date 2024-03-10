import clsx from 'clsx'
import React, { AnchorHTMLAttributes } from 'react'

import styles from './link.module.css'

export function Link({ className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={clsx(styles.link, className)} {...props}>
      {children}
    </a>
  )
}

export default React.memo(Link)
