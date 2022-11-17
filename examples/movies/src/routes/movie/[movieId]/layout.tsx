import { Show } from "solid-js";
import { A, Outlet, useParams } from "solid-start";
import { Hero } from "~/components/Hero";
import styles from "./layout.module.scss";
import { useMovie } from "./useMovie";

export default function MoviePage() {
  const params = useParams();
  const data = useMovie(params);

  return (
    <main>
      <Show when={data()}>
        <Hero item={data()?.item} />
      </Show>
      <div class={`${styles.nav}`}>
        <A
          href={`/movie/${useParams().movieId}`}
          activeClass={styles.buttonActive}
          class={styles.button}
        >
          Overview
        </A>
        <A
          href={`/movie/${useParams().movieId}/videos`}
          activeClass={styles.buttonActive}
          class={styles.button}
        >
          Videos
        </A>
        <A
          href={`/movie/${useParams().movieId}/photos`}
          activeClass={styles.buttonActive}
          class={styles.button}
        >
          Photos
        </A>
      </div>
      <Outlet />
    </main>
  );
}
