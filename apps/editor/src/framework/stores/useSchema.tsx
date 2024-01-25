import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from 'zustand/middleware'
import { SerializedNodes } from "@craftjs/core";
import dayjs from "dayjs";
import _ from "lodash";

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
  serializeNodes?: SerializedNodes;
  locales: LocaleDataRecordType[];
  depsMap: Record<string, DependencieRowType>;
  storeMap: Record<string, any>
}

export interface ISchemaState extends SchemaInfo {
  setJsModuleCode: (code: string) => void;
  onChange: (key: keyof SchemaInfo, value: any) => void;
}

export const useSchema = create<ISchemaState>()(
  devtools((set) => ({
    jsMoudleCode: "",
    opertionDate: dayjs().valueOf(),
    schema: "",
    locales: [
    ],
    depsMap: {},
    storeMap: {},
    setJsModuleCode: (code) => {
      set({
        jsMoudleCode: code
      });
    },
    onChange: (key, value: any) => {
      set((state) => {
        const newData = _.merge(state, {
          [key]: value
        })
        return newData
      }, false, `onChange(${key})`);
    },
  }), {
    name: 'useSchema'
  })
);
