import React, { useRef } from 'react'
import { Spin } from 'antd'
import { useBoolean, useEventListener } from 'ahooks'

interface IProps {
  src: string
  title: string
}

const Iframe: React.FC<IProps> = ({ src, title }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loading, { setFalse }] = useBoolean(true)

  useEventListener('load', () => {
    setFalse()
  }, { target: iframeRef, once: true })

  return (
    <Spin spinning={loading} size="large">
      <iframe
        ref={iframeRef}
        src={src}
        className="w-full h-screen border-none"
        title={title}
        allow="clipboard-read; clipboard-write"
      />
    </Spin>
  )
}

export default Iframe
