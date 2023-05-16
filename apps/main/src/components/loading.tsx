import { css, keyframes } from '@emotion/css'

const Breath = keyframes({
  '50%': {
    opacity: '0.5'
  }
})

export const Loading = () => {
  return (
    <div className={css({
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgb(235, 236, 237)'
    })}>
      <h1 className={css({
        fontWeight: 'bold',
        marginBottom: 0,
        fontSize: 44,
        animation: `${Breath} 2.5s ease-in-out infinite`
      })} >IGNITION PRO</h1>
    </div>
  )
}