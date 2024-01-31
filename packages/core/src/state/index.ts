import { create } from 'zustand'
import { immer as imr } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import _ from 'lodash'

export interface EditorGlobalState {
  data: Record<string, any>,
  refs: Record<string, any>,
}

export interface EditorGlobalMethods {
  onChange: (value: any) => void;
  onMountRefs: (id: string, ref: any) => void
}


export const useCreateStore = create<EditorGlobalState & EditorGlobalMethods>()(devtools(
  imr((set) => ({
    data: {},
    refs: {},
    onChange: (newData) => {
      set({
        data: newData
      })
    },
    onMountRefs: (nodeId, ref) => {
      set((state) => {
        state.refs[nodeId] = ref
      })
    }
  }))
))