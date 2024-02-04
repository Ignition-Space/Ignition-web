import { MentionProps, Mentions } from "antd";
import { ReactMaterialViewType } from "@huos/core";

export const MentionsView: ReactMaterialViewType<
MentionProps
> = ({ ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <Mentions  {...props} />
    </div>
  );
};
