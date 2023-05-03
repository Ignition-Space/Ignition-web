import { css } from '@emotion/css'
import { useTokens } from '@/hooks/useTokens'
import { CanvasOperation } from './operation'
import { FrameRender } from '@/components/render-frame'
import { Frame } from './frame'

export const Canvas = () => {
  const { token } = useTokens()

  return (
    <div
      className={css({
        height: '100%',
        paddingInline: token.paddingMD,
        paddingBlock: `70px`,
        background: token.colorBgLayout,
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      })}
    >
      <CanvasOperation/>
      <FrameRender>
        <Frame/>
      </FrameRender>
    </div>
  )
}
