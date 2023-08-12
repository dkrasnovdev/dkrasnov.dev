import React from "react";
import { Command } from "cmdk";
import { useStore } from "@nanostores/react";
import { commandIsOpen } from "$store";
import { IconChevronRight } from "@tabler/icons-react";
import { Group, Suggestion, icons } from "$data/cmdk";

export default function CommandMenu({ groups, placeholder, empty, suggestions }: { groups: Array<Group>; placeholder: string; empty: string; suggestions: Array<Suggestion> }) {
  const isCommandOpen = useStore(commandIsOpen);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const details = document.querySelectorAll("details");
    details.forEach((d) => d.removeAttribute("open"));
  }, [isCommandOpen]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        e.stopPropagation();
        commandIsOpen.set(!commandIsOpen.get());
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function push(url: string) {
    commandIsOpen.set(false);
    window.location = url as string & Location;
  }

  return (
    <Command.Dialog
      open={isCommandOpen}
      onOpenChange={commandIsOpen.set}
      label="Menu"
    >
      <div cmdk-input-container="">
        <Command.Input
          value={query}
          onValueChange={setQuery}
          placeholder={placeholder}
        />
        <button
          onClick={() => commandIsOpen.set(false)}
          className="flex h-7 items-center justify-center rounded-md border-2 px-1.5 text-neutral-500 transition hover:bg-neutral-800 focus:outline-none focus:ring"
        >
          <kbd className="pointer-events-none font-mono text-xs font-semibold uppercase">
            esc
          </kbd>
        </button>
      </div>
      <Command.List>
        <div className="blue-md pointer-events-none sticky top-0 h-6 w-full"></div>
        <Command.Empty>
          <p className="text-center text-sm">{empty}</p>
          <div className="divide-y overflow-hidden rounded-xl border">
            {suggestions.map(([name, href]) =>
              <a
                key={'suggestion_' + name}
                href={href}
                className="group flex items-center space-x-2 p-3 text-sm bg-neutral-900/95 hover:bg-neutral-950 text-neutral-500 first:rounded-t-xl last:rounded-b-xl"
              >
                <span className="transition group-hover:text-neutral-200 font-semibold">{name}</span>
                <div className="flex-1"></div>
                <span className="text-neutral-500 transition group-hover:text-neutral-200">
                  <IconChevronRight size={18} />
                </span>
              </a>)}

          </div>
        </Command.Empty>
        {groups.map((g) => <Command.Group key={g.name} heading={g.name}>
          {g.items.map((i) => <Command.Item key={g.name + i.name} value={`${g.name}_${i.name}`} onSelect={() => push(i.href)}>
            <div className="flex h-5 w-5 items-center justify-center text-subtle transition">
              {!!i.icon && React.createElement(icons[i.icon])}
              {!!i.color && (
                <div
                  className="h-[18px] w-[18px] rounded-full border"
                  style={{ backgroundColor: i.color }}
                />
              )}
            </div>
            <p className="font-semibold truncate text-neutral-500 transition">{i.name}</p>
            <div className="flex-1" />
            <p className="flex items-center space-x-2 text-neutral-500 transition">
              {i.href.startsWith("http") ? (
                <span>{new URL(i.href).hostname}&nbsp;↗</span>
              ) : (
                <IconChevronRight size={18} />
              )}
            </p>
          </Command.Item>)}
        </Command.Group>)}
        <div aria-hidden="true" className="pointer-events-none sticky bottom-0 -mt-5 h-8 w-full"></div>
      </Command.List>
    </Command.Dialog >
  );
}
