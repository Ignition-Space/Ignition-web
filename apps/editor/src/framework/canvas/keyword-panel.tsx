import { useEditor } from '@craftjs/core';
import { useKeyPress } from 'ahooks';
import { stringifyLzUtfData } from '@/framework/utils/json'
import lf from 'localforage'
import { App } from 'antd';

export const useEditorKeyPress = () => {

  const { message } = App.useApp()
  const { query } = useEditor()

  useKeyPress(['ctrl.s'], () => {
    message.success("保存本地成功～")
    const lzData = stringifyLzUtfData(query.serialize())
    lf.setItem('history', [{
      [Date.now()]: lzData
    }])
  });

}