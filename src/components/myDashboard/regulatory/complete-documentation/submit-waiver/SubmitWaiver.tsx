/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React from 'react'
import ActionButtons from '../../../../action-buttons/ActionButtons'
import { Table, Space } from 'antd'
import './submitWaiver.scss'
import Title from '../../../../title/Title'
import { CloudDownloadOutlined, DeleteFilled, InfoCircleOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const SubmitWaiver = () => {
  const roles = useSelector((state: any) => state.auth.sessionToken.roles)

  const columns = [
    {
      title: 'Name',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space className="table__icons" size="middle">
          <button>
            Download <CloudDownloadOutlined style={{ color: 'white' }} />
          </button>
          <button>
            Info <InfoCircleOutlined style={{ color: 'white' }} />
          </button>
          <button>
            Delete <DeleteFilled style={{ color: 'white' }} />
          </button>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      created: 32,
      edited: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      created: 42,
      edited: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      created: 32,
      edited: 'Sidney No. 1 Lake Park',
    },
  ]

  return (
    <div className="submit__waiver__container">
      {roles?.includes('waiver_admin') && (
        <div className="submit__waiver__container__info">
          <Title
            titleText="Upload the final documents for the user to submit to their CAA"
            level={5}
          />
          <input type="file" />
          <div className="submit__waiver__container__button">
            <ActionButtons buttonText="Upload" className="config__container__buttons--next" />
          </div>
        </div>
      )}
      <Title
        titleText={`Download the final documents for the user to submit to your CAA, then click 'Submit' to let Iris Automation know you have completed this stage.`}
        level={5}
      />
      <Table pagination={false} columns={columns} dataSource={data} />
      <div className="submit__waiver__container__button">
        <ActionButtons buttonText="Submit" className="config__container__buttons--next" />
      </div>
    </div>
  )
}

export default SubmitWaiver
