import React, { FC } from 'react'
import { Badge as AntBadge } from 'antd'

export class BadgeProps {
  constructor(public count: number, public size: 'default' | 'small') {}
}

const Badge: FC<BadgeProps> = ({ count, size }) => {
  return <AntBadge count={count} overflowCount={99} size={size} />
}

export default Badge
