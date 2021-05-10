import React, { FC, ReactElement, ReactNode } from 'react'
import { Tooltip } from 'antd'
interface CompleteDocumentHeaderProps {
  bgColor?: string
  date?: string | number
  icon?: ReactElement | {}
  value?: string
  tooltip?: string | ReactNode
  onClick?: (e: any) => void
  id?: string | number
}

const CompleteDocumentHeader: FC<CompleteDocumentHeaderProps> = ({
  bgColor,
  date,
  icon,
  value,
  tooltip,
  onClick,
  id,
}) => {
  return (
    <button value={id} className="doc__container" onClick={onClick}>
      <div style={{ background: bgColor }} className="doc__container__date">
        <span>
          <Tooltip title={tooltip}> {date}</Tooltip>
        </span>
      </div>
      <div style={{ color: bgColor }} className="doc__container__content">
        {icon}
        <span>{value}</span>
      </div>
    </button>
  )
}

export default CompleteDocumentHeader
