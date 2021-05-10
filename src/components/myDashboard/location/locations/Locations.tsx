import React, {ChangeEvent, useEffect, useState} from 'react'
import {Table} from 'antd'
import ShareableInput from './../../../shareable/shareable-input/ShareableInput'
import {PlusOutlined} from '@ant-design/icons'
import './locations.scss'
import Title from '../../../title/Title'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllLocations} from '../../../../redux/location/actions'
import {RootState} from '../../../../redux/rootReducer'
import { ColumnsType } from 'antd/es/table'

interface Data {
  key: string
  name: string
  full_name: string
  latitude: number
  longitude: number
}

const Locations = () => {
  const [searchedValue, setSearchedValue] = useState<string>('')
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const {locations} = useSelector((state: RootState) => state.location)

  useEffect(() => {
    setData(locations)
  }, [locations])

  const compareByAlph = (a: any, b: any) => {
    if (a > b) {
      return -1
    }
    if (a < b) {
      return 1
    }
    return 0
  }

  const columns: ColumnsType<Data> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => compareByAlph(a.name, b.name),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      sorter: (a, b) => compareByAlph(a.full_name, b.full_name),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Latitude',
      dataIndex: 'latitude',
      sorter: (a, b) => a.latitude - b.latitude,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Longitude',
      dataIndex: 'longitude',
      sorter: (a, b) => a.longitude - b.longitude,
      sortDirections: ['descend', 'ascend']
    },
  ]
  const searchLocation = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setSearchedValue(e.target.value)

  }

  useEffect(() => {
    dispatch(fetchAllLocations())
  }, [dispatch])

  const filtered = data?.filter(
    (item: any) =>
      item.name.toLowerCase().trim().includes(searchedValue.toLowerCase().trim()) ||
      item.full_name.toLowerCase().trim().includes(searchedValue.toLowerCase().trim())
  )

  return (
    <article className="dashboard__location__container">
      <header className="dashboard__location__container__header">
        <Title titleText="Locations"/>
        <div className="dashboard__location__container__header--icon">
          <Link to='/addlocation'>
            <PlusOutlined/>
          </Link>
        </div>
      </header>
      <section className="dashboard__location__container__content">
        <ShareableInput label="Search" onChange={searchLocation}/>
        <Table<Data>
          columns={columns}
          dataSource={filtered}
          pagination={{position: ['bottomCenter']}}
          size="small"
        />
      </section>
    </article>
  )
}

export default Locations
