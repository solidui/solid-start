import { Show } from 'solid-js'
import { createRouteAction } from 'solid-start'
import { signInWithMagicLink, signInWithProvider } from '~/db/session'
import styles from './signin.module.css'

export default function Signin() {
  const [submission, { Form }] = createRouteAction(async (e: Event) => {
    const target = e.target as HTMLFormElement
    const intent = target.intent.value

    e.preventDefault()

    if (intent === 'magicLink') {
      return signInWithMagicLink(target.email.value)
    } else {
      return signInWithProvider(target.intent.value)
    }
  })

  return (
    <div class={styles.wrapper}>
      <h1>Welcome Back!</h1>
      <p>It's so good to see you again.</p>

      <div class={styles.flex}>
        <Show when={submission.error}>
          <div>
            <p>Something went wrong: {submission.error.message}</p>
          </div>
        </Show>

        <Form class={styles.formWrapper}>
          <label html-for="email">Email</label>
          <input type="hidden" name="intent" value="magicLink" />
          <input type="tel" id="email" name="email" />
          <button disabled={submission.pending} type="submit">
            Sign in
          </button>
        </Form>
      </div>

      <br />

      <div>
        <Form>
          <input type="hidden" name="intent" value="google" />
          <button disabled={submission.pending} type="submit">
            Sign in with Google
          </button>
        </Form>

        <br />

        <Form>
          <input type="hidden" name="intent" value="discord" />
          <button disabled={submission.pending} type="submit">
            Sign in with Discord
          </button>
        </Form>
      </div>
    </div>
  )
}
