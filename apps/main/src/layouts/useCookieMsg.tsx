import { useMount } from 'ahooks'
import { notification } from 'antd'

const NotifyKey = 'useCookieConfirm'

export const useCookieMsg = () => {

  useMount(() => {
    notification.open({
      style: {
        width: 600,
      },
      icon: null,
      key: NotifyKey,
      closeIcon: null,
      duration: 2000,
      message: 'Message.',
      placement: 'bottom',
      description: 'btn',
    })
  })

  return null
}