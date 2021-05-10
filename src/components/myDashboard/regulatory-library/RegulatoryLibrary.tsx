import React, { FC, useEffect, useState } from 'react'
import { Tabs } from 'antd'
import usIcon from '../../../assets/icons/us.svg'
import caIcon from '../../../assets/icons/ca.svg'
import wwIcon from '../../../assets/icons/world-wide.svg'
import './regulatoryLibrary.scss'
import RegulatoryLibraryItems from './regulatory-library-items/RegulatoryLibraryItems'
import IsLoading from '../../../spinner/IsLoading'
import { baseAPIURL, config, waiverLibCategoryAPI } from '../../../api/constants'
import  fetch  from 'node-fetch'

interface RegulatoryLibraryProps {
  waiverCategory?: object[]
  isLoading?: boolean
}

type fetchResponse = any

const RegulatoryLibrary: FC<RegulatoryLibraryProps> = () => {
  const [waiverCategoryData, setWaiverCategoryData] = useState()
  const [activeTab, setActiveTab] = useState<string>('1')
  const [load, setLoad] = useState<boolean>(false)
  const { TabPane } = Tabs

  useEffect(() => {
    const apiEndpoint = `${waiverLibCategoryAPI}?where={"country_id":${activeTab}}&expand=1`
    const fetchWaiversCategoryData = async () => {
      setLoad(true)
      const waiverCategoryResponse: fetchResponse = await fetch(`${baseAPIURL}${apiEndpoint}`, config())
      const waiverCategory  = await waiverCategoryResponse.json()
      setWaiverCategoryData(waiverCategory)
      setLoad((load) => !load)
    }
    fetchWaiversCategoryData()
  }, [activeTab])
  const changeTab = (activeKey: string) => {
    setActiveTab(activeKey)
  }
  return (
    <div className="regulatory__library__container">
      <div className="regulatory__library__container__title">
        <h2>Regulatory Resource Library</h2>
      </div>
      <Tabs
        activeKey={activeTab}
        className="regulatory__library__container__tab"
        onChange={changeTab}
      >
        <TabPane key="1" tab={<img src={usIcon} alt="us-flag" />}>
          {load ? <IsLoading /> : <RegulatoryLibraryItems waiverCategory={waiverCategoryData} />}
        </TabPane>
        <TabPane tab={<img src={caIcon} alt="ca-icon" />} key="2">
          {load ? <IsLoading /> : <RegulatoryLibraryItems waiverCategory={waiverCategoryData} />}
        </TabPane>
        <TabPane tab={<img src={wwIcon} alt="ww-icon" />} key="3">
          {load ? <IsLoading /> : <RegulatoryLibraryItems waiverCategory={waiverCategoryData} />}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default RegulatoryLibrary
