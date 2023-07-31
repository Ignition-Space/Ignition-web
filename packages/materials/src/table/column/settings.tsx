import { ProForm, ProFormText } from "@ant-design/pro-components";
import { BindStateManageSetter, SetterRender } from "@lgnition-lowcode/setter";

export default () => {
  return (
    <>
      <ProForm.Group title="属性" collapsible align="start">
        <SetterRender
          fileds={{
            label: "标题",
          }}
          name={["title"]}
          setter={ProFormText}
        />
      </ProForm.Group>
    </>
  );
};
