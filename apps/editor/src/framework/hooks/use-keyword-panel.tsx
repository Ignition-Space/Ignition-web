import { useEditor } from '@craftjs/core';
import { useKeyPress } from 'ahooks';
import lf from 'localforage'
import { App } from 'antd';
import { useSchema } from '../stores/useSchema';

export const useEditorKeyPress = () => {

  const { message } = App.useApp()
  const { query } = useEditor()
  const onChangeSchema = useSchema(selector => selector.onChange)

  useKeyPress(['ctrl.s'], () => {
    const lzData = query.serialize()
    lf.setItem('history', [{
      [Date.now()]: lzData
    }])
    onChangeSchema('schema', lzData)
    message.success("保存成功～")
  });

}