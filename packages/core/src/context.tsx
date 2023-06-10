import * as React from "react";
import { Editor } from "@craftjs/core";
import { Provider as StoreProvider } from "react-redux";
import { store } from  './store'

type EditorProps = React.ComponentProps<typeof Editor>;

export type FrameworkProviderProps = Pick<EditorProps, "enabled">;

export const FrameworkContext = React.createContext<EditorProps | null>({
  enabled: true,
});

export const FrameworkContextProvider = (props: EditorProps) => {
  return (
    <StoreProvider store={store} >
      <FrameworkContext.Provider
        value={{
          enabled: props.enabled,
        }}
      >
        <Editor {...props}>{props.children}</Editor>
      </FrameworkContext.Provider>
    </StoreProvider>
  );
};
