import { createReactMaterial } from '@huos/core'
import { MentionsView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntMentions__ = createReactMaterial(MentionsView, {
  displayName: '@提及',
  custom: {
    useResize: false,
  },
  related: {
    settingRender: Panel,
    icon: () => <HuosRemixIcon type="icon-attachment-2" />
  }
})
