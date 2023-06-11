import * as React from "react";
import { Editor } from "@craftjs/core";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../store";
import type { FrameworRef } from "./mount-ref";
import { MountRef } from "./mount-ref";

type EditorProps = React.ComponentProps<typeof Editor>;

export type FrameworkProviderProps = Pick<EditorProps, "enabled">;

export const FrameworkContext = React.createContext<EditorProps | null>({
  enabled: true,
});

export const FrameworkContextProvider = React.forwardRef<FrameworRef, EditorProps>((props, ref) => {
  return (
    <StoreProvider store={store}>
      <FrameworkContext.Provider
        value={{
          enabled: props.enabled,
        }}
      >
        <Editor {...props}>
          <MountRef ref={ref} />
          {props.children}
        </Editor>
      </FrameworkContext.Provider>
    </StoreProvider>
  );
});
