import { useEditor } from "@craftjs/core";
import React from "react";
import doT from "dot";

const tpl = `
  <{{= it.name}} $n
  {{~ it.props :value:index }}
    {{= value.key}}={{= value.value}} $n
  {{~}}
`;

export const ComponentDoTCode = () => {
  const { id: nodeId, data } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        data,
      };
    }
  });

  const transformCode = React.useMemo(() => {
    const propsMap = Object.keys(data?.props || {}).map((key) => ({
      key,
      value: JSON.stringify(data.props?.[key])
    }))
    const tempFn = doT.template(tpl);
    const tplResutText = tempFn({
      ...data,
      props: propsMap || []
    }).replace('$n', '\n')
    return tplResutText
  }, [data]);
  return <div>
    <div dangerouslySetInnerHTML={{
      __html: transformCode
    }} >

    </div>
  </div>;
};
