import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { SerializedNodes } from '@craftjs/core'
import dayjs from 'dayjs'


export interface SchemaInfo {
  opertionDate: number;
  jsMoudleCode: string;
  schema: string,
  serializeNodes?: SerializedNodes
}


export interface ISchemaState extends SchemaInfo {
  setJsModuleCode: (code: string) => void;
  onChange: (key: keyof SchemaInfo, value: any) => void;
}


export const useSchema = create<ISchemaState>()(immer((set) => ({
  jsMoudleCode: '',
  opertionDate: dayjs().valueOf(),
  schema: '',
  setJsModuleCode: (code) => {
    set((state) => {
      state.jsMoudleCode = code
    })
  },
  onChange: (key, value: any) => {
    set((state) => {
      // @ts-ignore
      state[key] = value
    })
  }
})))