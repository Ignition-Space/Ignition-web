import { ProForm, ProFormText } from "@ant-design/pro-components";
import { BindingPrototypeSetter } from "@lgnition-lowcode/setter";

export default () => {
  return (
    <>
      <ProForm.Group title="属性" collapsible align="start" >
        <ProFormText
          name="children"
          label="文本"
          addonAfter={<BindingPrototypeSetter name="code" />}
        />
      </ProForm.Group>
    </>
  );
};
