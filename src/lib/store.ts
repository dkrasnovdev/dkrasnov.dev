import { atom } from "nanostores";

const searchQuery = atom<string>("");
const commandIsOpen = atom(false);

export { commandIsOpen, searchQuery };
