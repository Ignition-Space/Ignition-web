import { create } from 'zustand'
import { immer as imr } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import _ from 'lodash'

export interface EditorGlobalState {
  data: Record<string, any>
}

export interface EditorGlobalMethods {
  onChange: (value: any) => void
}


export const useCreateStore = create<EditorGlobalState & EditorGlobalMethods>()(devtools(
  imr((set) => ({
    data: {
      app: {
        title: "Title1",
      }
    },
    onChange: set
  }))
))