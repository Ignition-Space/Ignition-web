import { create } from 'zustand'
import { immer as imr } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import _ from 'lodash'

export interface EditorGlobalState {
  data: Record<string, any>
}

export interface EditorGlobalMethods {
  onChange: <K extends keyof EditorGlobalState>(key: K, value: EditorGlobalState[K]) => void
}


export const useCreateStore = create<EditorGlobalState & EditorGlobalMethods>()(devtools(
  imr(
    (set) => ({
      data: {},
      onChange: (k, v) => {
        set((state) => {
          _.set(state, k as any, v)
        })
      }
    })
  ),
))