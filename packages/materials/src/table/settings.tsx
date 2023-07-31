import { ProForm, ProFormDigit } from "@ant-design/pro-components";
import { BindStateManageSetter, SetterRender } from "@lgnition-lowcode/setter";

export default () => {
  return (
    <>
      <ProForm.Group title="属性" collapsible align="start">
        <SetterRender
          fileds={{
            label: "分页面总数",
          }}
          name={["pagination", "total"]}
          setter={ProFormDigit}
        />
        <BindStateManageSetter label="属性绑定" name="$$store" />
      </ProForm.Group>
    </>
  );
};
