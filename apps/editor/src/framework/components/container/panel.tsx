import { RenderFieldSetter } from '@huos/setter'
import { Input } from 'antd';

export const Panel = () => {
  return (
    <>
      <RenderFieldSetter name='name' label='背景' />
      <RenderFieldSetter name='test' label='test'>
      <Input placeholder='输入名称' />
      </RenderFieldSetter>
    </>
  );
};
