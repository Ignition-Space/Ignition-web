import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import _ from 'lodash'

export interface EditorGlobalState {
  data: Record<string, any>
}

export interface EditorGlobalMethods {
  onChange: (value:  Record<string, any>) => void
}


export const useCreateStore = create<EditorGlobalState & EditorGlobalMethods>()(devtools(
  (set) => ({
    data: {
      app: {
        title: "Title1",
      }
    },
    onChange: (v) => {
      set(() => {
        return _.cloneDeep(v)
      })
    }
  })
))