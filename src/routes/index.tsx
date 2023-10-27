import { Title } from "solid-start";
import { createResource, Show, Suspense, createSignal } from "solid-js";
import Counter from "~/components/Counter";
import { createQuery } from "@tanstack/solid-query";

export default function Home() {
  const [enabled, setEnabled] = createSignal(false);

  const query = createQuery(() => ({
    queryKey: ["todos"],
    queryFn: async () => {
      console.log("ran query!");
      return { foo: 33 };
    },
    enabled: enabled(),
  }));

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Query enabled not working repro</h1>

      <div>
        <Suspense fallback={"loading..."}>
          query result: {query.data?.foo}
        </Suspense>
      </div>
      <button
        onClick={() => {
          setEnabled(true);
        }}
      >
        enable query
      </button>
    </main>
  );
}
