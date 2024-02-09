import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from 'zustand/middleware'
import { SerializedNodes } from "@craftjs/core";

export interface EditorStateType {
  nodes: SerializedNodes
}

export interface IEditorState extends EditorStateType {
  onChange: (value: SerializedNodes) => void;
}

export const useEditorState = create<IEditorState>()(
  devtools(immer((set) => ({
    nodes: {},
    onChange: (value: any) => {
      set({
        nodes: value
      })
    },
  })), {
    name: 'useEditorState'
  })
);
