import {
  Button,
  Flex,
  AutoComplete,
  Space,
  Typography,
  Alert,
  Empty,
  Card,
} from "antd";
import { ClearOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import _ from "lodash";
import { css } from "@emotion/css";
import { ExpressionModal } from "@huos/setter";
import { useEditor } from "@craftjs/core";
import React from "react";

export interface IEventType {
  name?: string;
  fn?: string;
  uid: React.Key;
}

const classes = {
  list: css({
    padding: 12,
    width: "100%",

    "& .ant-pro-form-list-container": {
      flex: 1,
    },
    "& .ant-pro-form-list-item": {
      justifyContent: "space-between",
    },
  }),
};

const defaultCode = `function () {
  console.log('hello onMessage...')
}`;

export const EventsPanel = () => {
  const [eventList, setEventList] = React.useState<IEventType[]>([
    {
      uid: _.uniqueId("event"),
    },
  ]);

  const errorMsg = React.useMemo(() => {
    const hasDuplicates = _.some(
      _.groupBy(eventList, "name"),
      (group) => group.length > 1
    );

    if (hasDuplicates) {
      return "当前事件列表中存在重复的事件声明，可能会造成事件逻辑冲突";
    }

    const allFieldsPresent = _.every(
      eventList,
      (obj) => !_.isEmpty(obj.name) && !_.isEmpty(obj.fn)
    );

    if (!allFieldsPresent) {
      return "请完善红色边框的事件声明";
    }

    return "";
  }, [eventList]);

  const {
    id: nodeId,
    eventMap,
    events,
    actions,
  } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        eventMap: (data?.custom?.evetns as Record<string, string>) || {},
        events: data.props?.__events__ || [],
      };
    }
  });

  const handleEventChange = (uid: React.Key, value: Partial<IEventType>) => {
    const newEventList = eventList.map((item) => {
      if (uid === item.uid) {
        return {
          ...item,
          ...value,
        };
      }

      return item;
    });

    setEventList(newEventList);

    actions.setProp(nodeId, (oldState) => {
      oldState.__events__ = newEventList;
    });
  };

  const handleRemoveChange = (uid: React.Key) => {
    const newEventList = eventList.filter((item) => item.uid !== uid);
    setEventList(newEventList);
    actions.setProp(nodeId, (oldState) => {
      oldState.__events__ = newEventList;
    });
  };

  const handleAddEvent = () => {
    setEventList([
      ...eventList,
      {
        uid: _.uniqueId(),
      },
    ]);
  }

  React.useEffect(() => {
    if (nodeId) {
      // 初始化eventMap

      const defaultEvent = _.map(eventMap, (__, key) => ({
        name: key,
      }));

      const mergedArray = _.unionBy(defaultEvent, events, "name");
      const filteredArray = _.values(_.keyBy(mergedArray, "name"));

      const initialEvents = filteredArray.map((_item) => ({
        uid: _.uniqueId("event"),
        ..._item,
      }));

      setEventList(initialEvents);
    }
  }, [nodeId]);

  return (
    <div className={classes.list}>
      <Flex vertical gap={12}>
        <Flex justify="flex-start">
          <Typography.Text strong>事件</Typography.Text>
        </Flex>
        {eventList?.length > 0 ? null : (
         <Empty
         image={Empty.PRESENTED_IMAGE_SIMPLE}
         description="暂无事件信息"
       >
         <Button type="primary" onClick={handleAddEvent} >新增事件</Button>
       </Empty>
        )}
        <Flex vertical gap={12}>
          {eventList.map(({ name, fn, uid }) => {
            return (
              <Flex key={uid} gap={12}>
                <AutoComplete
                  status={name && fn ? undefined : "error"}
                  value={name}
                  placeholder="请输入事件名称"
                  style={{ width: "100%" }}
                  options={_.map(eventMap, (value, key) => ({
                    label: value + key,
                    value: key,
                  }))}
                  allowClear
                  onChange={(v) => {
                    handleEventChange(uid, {
                      name: v,
                    });
                  }}
                />
                <Space>
                  <ExpressionModal
                    value={fn}
                    namePath={name ? [name] : undefined}
                    defaultCode={defaultCode}
                    trigger={
                      <Button disabled={!name} icon={<EditOutlined />} />
                    }
                    onChange={(v) => {
                      handleEventChange(uid, {
                        fn: v,
                      });
                    }}
                  />
                  <Button
                    danger
                    icon={<ClearOutlined />}
                    onClick={() => handleRemoveChange(uid)}
                  />
                </Space>
              </Flex>
            );
          })}
        </Flex>
        {errorMsg ? (
          <Alert
            type="error"
            message={
              <Typography.Text type="danger">{errorMsg}</Typography.Text>
            }
          />
        ) : null}
        {eventList?.length > 0 ? (
          <Button
            icon={<PlusOutlined />}
            onClick={handleAddEvent}
          >
            新增事件
          </Button>
        ) : null}
      </Flex>
    </div>
  );
};
