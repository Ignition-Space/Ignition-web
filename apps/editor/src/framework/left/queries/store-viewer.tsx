import { css } from "@emotion/css";
import JsonView from "react18-json-view";
import { useCreateStore } from "@huos/core";
import _ from "lodash";
import "react18-json-view/src/style.css";

const classes = {
  queries: css({
    padding: 12,
  }),
};

export const StoreViewer = () => {
  const { data, onChange: onChangeData } = useCreateStore();

  return (
    <div className={classes.queries}>
     <JsonView
        editable={false}
        src={data}
        theme="atom"
        collapseStringMode="address"
        collapseStringsAfterLength={12}
        onChange={(params) => {
          onChangeData(params.src)
        }}
      />
    </div>
  );
};
