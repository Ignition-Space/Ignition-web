import React from "react";
import _ from "lodash";
import { jsRuntime } from "../runtime";
import { useTranslation } from "react-i18next";
import { useCreateStore } from "../state";
import { useDebounceEffect, useThrottleEffect } from "ahooks";
import { App } from "antd";

export const useParseBinding = (
  props: Record<string, any>,
  events?: {
    name: string;
    fn: string;
  }[]
) => {
  const app = App.useApp();

  const { t } = useTranslation();
  const store = useCreateStore((selector) => selector.data);

  const memoizedProps = React.useMemo(() => {
    function evaluateProps(value: Record<string, any>) {
      if (typeof value === "object" && value !== null && "$$jsx" in value) {
        try {
          // 注意: eval在这里可能是不安全的!
          return jsRuntime.execute(value.$$jsx, {
            huos: {
              t,
              app,
              $state: store,
            },
          })?.value;
        } catch {
          console.error("Unable to evaluate $$jsx", value.$$jsx);
          return value;
        }
      } else if (typeof value === "object" && value !== null) {
        const evaluated: Record<string, any> = {};
        for (const key in value) {
          evaluated[key] = evaluateProps(value[key]); // 递归求值
        }
        return evaluated;
      } else {
        return value;
      }
    }

    return evaluateProps(props);
  }, [props, store]);

  const memoizedEvents = React.useMemo(() => {
    const eventMap: Record<string, Function> = {};
    if (Array.isArray(events)) {
      _.forEach(events, ({ name = "", fn = "" }) => {
        const runFun = jsRuntime.execute(fn, {
          huos: {
            t,
            app,
            getState: useCreateStore.getState,
          },
        })?.value;

        eventMap[name] = runFun;
      });
    }

    return eventMap;
  }, [events]);

  return {
    ...memoizedProps,
    ...memoizedEvents,
  } as any;
};
