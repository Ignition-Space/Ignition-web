import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


export interface ISchemaState {
  jsMoudleCode: string;
  setJsModuleCode: (code: string) => void;
}


export const useSchema = create<ISchemaState>()(immer((set) => ({
  jsMoudleCode: '',
  setJsModuleCode: (code) => {
    set((state) => {
      state.jsMoudleCode = code
    })
  }
})))