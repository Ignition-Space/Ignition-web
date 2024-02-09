import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from 'zustand/middleware'
import { SerializedNodes } from "@craftjs/core";
import dayjs from "dayjs";

export interface LocaleDataRecordType {
  key?: string;
  cn?: string;
  en?: string;
  jp?: string;
  kr?: string;
  fe?: string;
};

export interface DependencieRowType {
  url: string;
  version: string;
}

export interface SchemaInfo {
  opertionDate: number;
  jsMoudleCode: string;
  schema: string;
  locales: LocaleDataRecordType[];
  depsMap: Record<string, DependencieRowType>;
  storeMap: Record<string, any>
}

export interface ISchemaState extends SchemaInfo {
  setJsModuleCode: (code: string) => void;
  onChange: (key: keyof SchemaInfo, value: any) => void;
}

export const useSchema = create<ISchemaState>()(
  devtools(immer((set) => ({
    jsMoudleCode: "",
    opertionDate: dayjs().valueOf(),
    schema: "",
    locales: [
    ],
    depsMap: {},
    storeMap: {
      app: {
        title: "Title1",
      }
    },
    setJsModuleCode: (code) => {
      set((state) => {
        state.jsMoudleCode = code;
      });
    },
    onChange: (key, value: any) => {
      set((state) => {
        // @ts-ignore
        state[key] = value;
      }, false, `onChange(${key})`);
    },
  })), {
    name: 'useSchema'
  })
);
