import React from 'react'
import copy from "copy-to-clipboard";
import { Button, Modal, Tabs, Space, Tag, Card, Typography, Alert, message } from 'antd'
import { useTokens } from '@/hooks/useTokens'
import { css } from '@emotion/css'
import { CodeOutlined } from '@ant-design/icons'
import { useEditor } from '@craftjs/core';
import lz from 'lzutf8'

const RenderDataView = (props: { data: string }) => {
  const { token } = useTokens()

  /**
   * 复制当前页面协议参数
   */
  const handleCopyDataClick = () => {
    const hasCopy = copy(props.data)

    if(hasCopy) {
    	message.success('您当前的内容已经复制到剪切板了～')
    } else {
    	message.error(`复制失败，请重新操作`)
    }
  }

  return (
    <Card
      size='small'
      actions={[
        <Typography.Text key='copy' onClick={handleCopyDataClick}>
          复制到剪切板
        </Typography.Text>
      ]}
      className={css({
        marginTop: token.marginMD
      })}
    >
      <Typography.Text type='secondary'>{props.data}</Typography.Text>
    </Card>
  )
}

export const SchemaModal = () => {
  const [open, setOpen] = React.useState(false)

  const { query } = useEditor();

  const sourceData = query.serialize();

  const viewdata = React.useMemo(() => {
    return {
      json: JSON.stringify(JSON.parse(sourceData),null, 2),
      state: lz.encodeBase64(lz.compress(sourceData)),
    };
  }, [sourceData]);

  /** 
   * 打开协议弹窗
   */
  const handleSchemaModalOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Button type='text' ghost icon={<CodeOutlined />} onClick={handleSchemaModalOpen} />
      <Modal
        title={<Space>
          协议管理
          <Tag color='red'>Beta</Tag>
        </Space>}
        open={open}
        width={800}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Alert
          type='error' description={<Typography.Text type='danger'>
            目前暂时提供三种通用协议和产物来维护平台的存储，<Tag>JSON Schema</Tag>是标准的通用协议，而<Tag>StateText</Tag>是基于其标准协议进行<Tag>lz-utf8</Tag>进行压缩后的产物，拥有更小的空间占用。
          </Typography.Text>}
        />
        <Tabs
          defaultActiveKey='1'
          items={[
            {
              key: 'json',
              label: 'JSON Schema',
              children: <RenderDataView data={viewdata.json} />
            },

            {
              key: 'state',
              label: 'StateText',
              children: <RenderDataView data={viewdata.state} />
            },

            {
              key: 'js-esm',
              label: '代码',
              children: <RenderDataView data='1111' />,
              disabled: true
            }
          ]}
        />
      </Modal>
    </>

  )
}