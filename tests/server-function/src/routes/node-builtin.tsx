import _ from "lodash";
import { join } from 'path';
import { createEffect, createSignal } from "solid-js";
import { isServer } from "solid-js/web";

function serverFnWithNodeBuiltin() {
  "use server";

  return join('can','externalize');
}

export default function App() {
  const [output, setOutput] = createSignal<{ serverFnWithNodeBuiltin?: string }>({});

 

  createEffect(async () => {
    const restult = await serverFnWithNodeBuiltin();
    setOutput(prev => ({ ...prev, serverFnWithNodeBuiltin: restult }));
  });

  return (
    <main>
      <span id="server-fn-test">{JSON.stringify(output())}</span>
    </main>
  );
}
