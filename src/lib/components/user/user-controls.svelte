<script lang="ts">
  import { assets } from '$app/paths';

  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Transition,
  } from "@rgossiaux/svelte-headlessui";

  function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  function resolveClass({
    active,
    disabled,
  }: {
    active: boolean;
    disabled: boolean;
  }) {
    return classNames(
      "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
      disabled && "cursor-not-allowed opacity-50"
    );
  }
</script>

<Menu as="div" class="relative">
  <MenuButton class="rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-black">
    <img class="w-10 h-10 rounded-full" src="{assets}/images/placeholder-avatar.jpg" alt="Rounded avatar">
  </MenuButton>
  <Transition
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
  <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div class="py-1">
      <MenuItem class={resolveClass}>
        Trial
        <span class="text-xs ml-1">(2 days left)</span>
      </MenuItem>
    </div>
    <MenuItem as="a" href="/appearance-settings" class={resolveClass}>
      Appearance settings
    </MenuItem>
    <MenuItem as="a" disabled href="/send-feedback" class={resolveClass}>
        Send Feedback (coming soon!)
    </MenuItem>
    <MenuItem as="button" class={resolveClass}>
      Log out
    </MenuItem>
  </MenuItems>
</Transition>
</Menu>
