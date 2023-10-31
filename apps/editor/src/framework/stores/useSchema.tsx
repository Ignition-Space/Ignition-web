import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import dayjs from 'dayjs'


export interface SchemaInfo {
  opertionDate: number;
  jsMoudleCode: string;
}


export interface ISchemaState extends SchemaInfo {
  setJsModuleCode: (code: string) => void;
  onChange: (key: keyof SchemaInfo, value: never) => void;
}


export const useSchema = create<ISchemaState>()(immer((set) => ({
  jsMoudleCode: '',
  opertionDate: dayjs().valueOf(),
  setJsModuleCode: (code) => {
    set((state) => {
      state.opertionDate = dayjs().valueOf()
      state.jsMoudleCode = code
    })
  },
  onChange: (key, value) => {
    set((state) => {
      state.opertionDate = dayjs().valueOf()
      state[key] = value
    })
  }
})))