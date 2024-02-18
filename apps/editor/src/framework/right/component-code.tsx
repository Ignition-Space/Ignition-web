import NJ from "nunjucks";
import React from "react";
import prettier from "prettier/standalone";
import babel from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";
import { useEditor } from "@craftjs/core";
import { isString, has } from "lodash";
import { useAsyncEffect } from "ahooks";
import { CodeEditor } from "../common/code-editor";
import { NodeData as Node } from '@craftjs/core'


NJ.configure({ autoescape: false });


const tpl = `
<{{ name }} 
  {% for key, value in props -%}
    {% if key != 'children' %}
      {{ key }}={{ transformValue(key, value) }}
    {% endif %}
  {% endfor -%}
{% if props.children %}
>
  {{props.children}}
</{{name}}>
{% else %}
/>
{% endif %}
`;

export const ComponentDoTCode = () => {
  const [code, setCode] = React.useState("");

  const { nodeData, query } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId];

      return {
        id: currentNodeId,
        nodeData: data,
      };
    }
  });

  function getNodeDataById(id: string): Node | undefined {
    return query.node(id).get()?.data
  }

  function traverseNodes(node: Node): void {
    // 处理当前节点
    console.log(node, 'traverseNodes');

    const childrenNodes = node?.nodes?.length ? node.nodes : []
  
    // 递归遍历子节点
    for (const childId of childrenNodes) {
      const childNode = getNodeDataById(childId);
      if (childNode) {
        traverseNodes(childNode);
      }
    }
  }

  React.useEffect(() => {
    traverseNodes(nodeData)
  }, [nodeData])

  useAsyncEffect(async () => {
    const str = NJ.renderString(tpl, {
      ...nodeData,
      transformValue: (_: string, v: any) => {
        // 表达式
        if (has(v, "$$jsx")) {
          return `{${v.$$jsx}}`;
        }
        if (isString(v)) {
          return JSON.stringify(v);
        }
        return `{${JSON.stringify(v, null, 2)}}`;
      },
    });

    const formatCode = await prettier
      .format(str, {
        parser: "babel",
        plugins: [babel, estree],
        printWidth: 50
      })

    setCode(formatCode)
  }, [nodeData]);

  console.log(nodeData, 'nodeData')
  return (
    <div
      style={{
        height: "100%",
        marginInline: -8,
      }}
    >
      <CodeEditor value={code} language="html" height="100%" />
    </div>
  );
};
