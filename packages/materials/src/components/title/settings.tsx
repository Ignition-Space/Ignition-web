import { ProForm, ProFormText } from "@ant-design/pro-components";
import { BindStateManageSetter, SetterRender } from "@lgnition-lowcode/setter";

export default () => {
  return (
    <>
      <ProForm.Group title="属性" collapsible align="start">
        <SetterRender
          fileds={{
            label: "内容",
          }}
          name={["children"]}
          setter={ProFormText}
        />
        <BindStateManageSetter label="属性绑定" name="$$store" />
      </ProForm.Group>
    </>
  );
};
