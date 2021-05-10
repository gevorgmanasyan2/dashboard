import React, { FC, MouseEvent, ReactNode, useState, useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import fetch from 'node-fetch'
import { connect } from 'react-redux'
import IsLoading from '../../../spinner/IsLoading'
import { config, baseAPIURL } from '../../../api/constants'

import './dashboardActions.scss'

interface DashboardActionsProps {
  icon: ReactNode | null
  title: string
  count: number
  isLoading: boolean
  itemTitle: string
  itemInfo: string
  loc?: LocationType
  apiEndpoint: string
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
}
type LocationType = {
  link: string
  addLink?: string
}

type fetchResponse = any

const DashboardActions: FC<DashboardActionsProps> = ({
  icon,
  title,
  itemTitle,
  itemInfo,
  isLoading,
  apiEndpoint,
  loc,
}) => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)
  useEffect(() => {
    const fetchCount = async () => {
      const totalCountResponse: fetchResponse = await fetch(`${baseAPIURL}${apiEndpoint}`, config())
      const totalCount = await totalCountResponse.json()
      setTotalCount(totalCount.count)
    }
    fetchCount()
  }, [apiEndpoint])

  return (
    <>
      <section
        className={
          !clicked ? 'dashboardActions__container' : 'dashboardActions__container--selected'
        }
        onClick={() => setClicked(!clicked)}
      >
        <div className="dashboardActions__container__header">
          <div className="dashboardActions__container__header--icon">{icon}</div>
          <p className="dashboardActions__container__header--title">{title}</p>
        </div>
        <div className="dashboardActions__container__main">
          <div className="dashboardActions__container__main__element">
            <span className="dashboardActions__container__main__element--count">
              <Link to={loc?.link || ''}>{isLoading ? <IsLoading /> : totalCount}</Link>
            </span>
            <span className="dashboardActions__container__main__element--title"> {itemTitle}</span>
          </div>
          <div className="dashboardActions__container__main__icon">
            <Link to={loc?.addLink || ''}>
              <PlusOutlined />
            </Link>
          </div>
        </div>
        <div className="dashboardActions__container__info">
          <span>{itemInfo}</span>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.waiver.isLoading,
  }
}

export default connect(mapStateToProps)(DashboardActions)
