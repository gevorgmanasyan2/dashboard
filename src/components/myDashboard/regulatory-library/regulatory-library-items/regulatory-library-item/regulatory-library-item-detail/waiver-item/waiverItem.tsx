import { BookOutlined, DownloadOutlined, FileOutlined } from '@ant-design/icons'
import React, { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import { saveAs } from 'file-saver'
import { baseAPIURL, config } from '../../../../../../../api/constants'
import './waiverItem.scss'
import fetch from 'node-fetch'

interface WaiverItemProps {
  name: string
  description: string
  imageSource: string
  actionLink: string
  fileName: string
  externalLink: string
}

type fetchResponse = any

const WaiverItem: FC<WaiverItemProps> = ({
  name,
  description,
  imageSource,
  actionLink,
  fileName,
  externalLink,
}) => {
  const [img, setImg] = useState('')

  useEffect(() => {
    const fetchWaiversImage = async () => {
      const waiverImgResponse: fetchResponse = await fetch(`${baseAPIURL}${imageSource}`, config())
      const waiverImg = await waiverImgResponse.blob()
      setImg(URL.createObjectURL(waiverImg))
    }
    fetchWaiversImage()
  }, [imageSource])

  const downloadFile = async () => {
    const waiverFileResponse: fetchResponse = await fetch(`${baseAPIURL}${actionLink}`, config())
    const waiverFile = await waiverFileResponse.blob()
    saveAs(waiverFile, fileName)
  }

  return (
    <div className="waiver__item__container__modal__details">
      <div>
        <img src={`${img}`} style={{ width: '399px', height: '200px' }} alt="" />
      </div>

      <div className="waiver__item__container__modal__details__file">
        <FileOutlined />
        <span className="waiver__item__container__modal__details__file--name">
          {name}
        </span>
      </div>
      <div className="waiver__item__container__modal__details--desc">
        <p>{description}</p>
      </div>
      <div className="waiver__item__container__modal__details__footer">
        <div className="waiver__item__container__modal__details__footer--icon">
          {fileName ? (
            <Button htmlType="button" onClick={downloadFile}>
              <DownloadOutlined />
            </Button>
          ) : (
            <Button href={`${externalLink}`} target="_blank">
              <BookOutlined />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default WaiverItem
