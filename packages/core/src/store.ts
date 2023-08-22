import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { merge } from 'lodash'


type StoreType = Record<string, any>

interface EditorGloablScopeType {
  store: Record<string, any>
  onUpdate: (scope: StoreType) => void;
}

export const useEditorGloablScope = create(immer<EditorGloablScopeType>((set) => {
 return {
  store: {} as StoreType,
  onUpdate(scope: StoreType) {
    set((store: StoreType) => {
      store = merge(scope, store)
    })
  }
 }
}))