/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/display-name */
import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { MessageFilled, WarningFilled } from '@ant-design/icons'
import IsLoading from '../../../spinner/IsLoading'

import { Table, Tag } from 'antd'
import { fetchWaiverData } from '../../../redux/waiver/actions'
import { Link } from 'react-router-dom'
import './regulatory.scss'

interface RegulatoryProps {
  isLoading?: boolean
  inputValue?: string
  waivers?: waiverType[]
}

type waiverType = {
  id: number
  name: string
  percent_completion: number
  open_questionnaires: number
  waiver_type_name: string
  waiver_status_name: string
  assigned_to_user_name: string
}

const Regulatory: FC<RegulatoryProps> = ({ waivers, isLoading, inputValue }) => {
  const tableData = waivers?.map((row) => ({
    key: row.id,
    name: row.name,
    type: row.waiver_type_name,
    tag: row.waiver_status_name,
    percent: `${row.percent_completion}${'%'}`,
    assigned: row.assigned_to_user_name,
    flag: row.open_questionnaires,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWaiverData())
  }, [dispatch])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (row: any, record: any) => {
        return <Link to={`/regulatory-complete-document/${record.key}`}>{row}</Link>
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'tag',
      key: 'tag',
      render: (tag: any) => (
        <Tag color={tag === 'open' ? 'green' : 'geekblue'} key={tag}>
          {tag}
        </Tag>
      ),
    },
    {
      title: 'Assigned Agent',
      dataIndex: 'assigned',
      key: 'assigned',
    },
    {
      title: 'Percent',
      dataIndex: 'percent',
      key: 'percent',
    },
    {
      title: 'Action flag',
      dataIndex: 'flag',
      key: 'flag',
      render: (text: any) => {
        return text > 0 ? <WarningFilled className="warning-icon" /> : <MessageFilled />
      },
    },
  ]

  const filtered = tableData?.filter((waiver: any) =>
    waiver.name.toLowerCase().trim().includes(inputValue?.toLowerCase().trim())
  )
  return (
    <div className="regulatory__items">
      {isLoading ? (
        <IsLoading />
      ) : (
        <Table
          dataSource={inputValue ? filtered : tableData}
          columns={columns}
          bordered={true}
          scroll={{ x: '100%' }}
          
        />
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.waiver.isLoading,
    waivers: state.waiver.waivers,
  }
}

export default connect(mapStateToProps)(Regulatory)
