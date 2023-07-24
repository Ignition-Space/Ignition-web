import React from "react";
import { Card, Col, Row, Space, Tabs, Tag, Typography, message } from "antd";
import { css } from "@emotion/css";
import type { Item } from "./db";
import { getHisotryList, delHistoryRecord } from "./db";

const List: React.FC<{
  data: Item[];
  reload: () => void;
}> = ({ data, reload }) => {
  // 处理预览逻辑
  const handlePreviewEvt = async (record: Item) => {
    
    // 生成preview逻辑
    const previewId = "uid-" + new Date().getTime()
    sessionStorage.setItem(previewId, record.htmlBody)
    window.open(`/preview/${previewId}?history=$local&historyId=${record.id}`)
  }

  const handleLocalHisotryDelete = async (reocrd: Item) => {
    await delHistoryRecord(reocrd)
    message.success("删除成功")
    reload()
  }

  return (
    <div
      className={css({
        padding: 12,
      })}
    >
      <Row gutter={[12, 12]}>
        {data.map((item) => {
          return (
            <Col span={24} key={item.id}>
              <Card
                size="small"
              >
                <Space direction="vertical">
                  <Typography.Text>{item.createTime}</Typography.Text>
                  <Space>
                    <Typography.Link onClick={() => handlePreviewEvt(item)} >预览</Typography.Link>
                    <Typography.Text type="danger" onClick={() => handleLocalHisotryDelete(item)}  >删除</Typography.Text>
                  </Space>
                </Space>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export const Hisotry = () => {
  const [localList, setLocalList] = React.useState<Item[]>([]);
  const [activeKey, setActiveKey] = React.useState("local")

  const getLocalHistory = async () => {
    const data = await getHisotryList();
    setLocalList(data);
  };

  React.useEffect(() => {
    if (activeKey === 'local')  {

      getLocalHistory();
    } else {
      // getRemoteHisotry
    }
  }, [activeKey]);

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        centered
        items={[
          {
            key: "local",
            label: `本地存储`,
            children: <List data={localList} reload={getLocalHistory} />,
          },
          {
            key: "remote",
            label: `远程存储`,
            children: <List data={localList} reload={getLocalHistory} />,
          },
        ]}
        onChange={(v) => setActiveKey(v)}
      />
    </div>
  );
};
