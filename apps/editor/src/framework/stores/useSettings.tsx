import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from 'zustand/middleware';

export interface ISettingStateType {
  showSetting: boolean;
}

export interface ISettingMethodType {
  onChange: (key: keyof ISettingStateType, value: any) => void;
}

export const useSettingState = create<ISettingStateType & ISettingMethodType>()(
  devtools(immer((set) => ({
    showSetting: false,

    onChange: (key, value) => {
      console.log(key, value, 'useSettingState')
      set({
        [key]: value
      })
    }
  })), {
    name: 'useSettings'
  })
);
