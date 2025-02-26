import { Session } from "@supabase/supabase-js";
import { Accessor, createContext, createEffect, createSignal, ParentProps, useContext } from "solid-js";
import { supabase } from "./client";

const SessionContext = createContext<Accessor<Session | null>>(() => null);

export function SupabaseSessionProvider(props: ParentProps) {
    const [session, setSession] = createSignal<Session | null>(null)

    createEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            console.log("Session from getSession", session)
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            console.log("Session from onAuthStateChange", session)
            setSession(session)
        })
    })

    return (
        <SessionContext.Provider value={session} >
            {props.children}
        </SessionContext.Provider>
    );
}

export function useSupabaseSession() { return useContext(SessionContext); }