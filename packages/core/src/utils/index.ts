/** HuOS画布的Id */
export const CanvasRootId = "__HuoSEditorPreview__";

/** HuOS实例的Id */
export const ScopeMoudleId = "__HuoSBuilderScope__"

/** HuOS代码运行时的ID */
export const RuntimeCtxId = "__HuoSRuntime__";

export const createRuntmieContext = () => {
  let iframe = document.getElementById(RuntimeCtxId) as HTMLIFrameElement;
  try {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-same-origin allow-scripts");
      iframe.style.display = "none";
      iframe.id = RuntimeCtxId;
      document.documentElement.appendChild(iframe);
    }

    return iframe;
  } catch (error) {
    console.error("初始化执行容器失败")
    return null
  }
};
