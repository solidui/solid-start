import { createContext } from "solid-js";
import { RequestContext } from "./StartServer";

export const StartContext = createContext<{
  manifest?: Record<string, any>;
  context?: RequestContext;
}>({});

export function StartProvider(props) {
  return <StartContext.Provider value={props}>{props.children}</StartContext.Provider>;
}
