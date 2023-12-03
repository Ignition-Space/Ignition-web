import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { SerializedNodes } from "@craftjs/core";
import dayjs from "dayjs";

export type LocaleDataRecordType = {
  key?: string;
  cn?: string;
  en?: string;
  jp?: string;
  kr?: string;
  fe?: string;
};

export interface SchemaInfo {
  opertionDate: number;
  jsMoudleCode: string;
  schema: string;
  serializeNodes?: SerializedNodes;
  locales: LocaleDataRecordType[];
}

export interface ISchemaState extends SchemaInfo {
  setJsModuleCode: (code: string) => void;
  onChange: (key: keyof SchemaInfo, value: any) => void;
}

export const useSchema = create<ISchemaState>()(
  immer((set) => ({
    jsMoudleCode: "",
    opertionDate: dayjs().valueOf(),
    schema: "",
    locales: [
      {
        key: "hello",
        cn: "hello",
        en: "你好",
      },
      {
        key: "welcome",
        cn: "Welcome to my app!",
        en: "欢迎来到我的应用！",
      },
    ],
    setJsModuleCode: (code) => {
      set((state) => {
        state.jsMoudleCode = code;
      });
    },
    onChange: (key, value: any) => {
      set((state) => {
        // @ts-ignore
        state[key] = value;
      });
    },
  }))
);
