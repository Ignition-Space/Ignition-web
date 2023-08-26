import { Tooltip, Button, TooltipProps } from "antd"

export interface TooltipButtonProps {
  icon: React.ReactNode
}

export const TooltipButton: React.FC<TooltipButtonProps & TooltipProps> = ({ icon, ...tooltipProps }) => {
  return (
    <Tooltip showArrow={false} color="blue" {...tooltipProps} >
      <Button icon={icon} />
    </Tooltip>
  )
}