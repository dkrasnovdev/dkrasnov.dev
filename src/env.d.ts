/// <reference types="astro/client" />

// Utility type primarily for optional props in Svelte because the `prop:?`
type Optional<T> = T | null | undefined;
