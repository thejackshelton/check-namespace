import { Slot, component$ } from "@builder.io/qwik";
import { Collapsible } from "@qwik-ui/headless";

export default component$(() => {
  return (
    <HCollapsible>
      <Collapsible.Trigger>
        <span>Trigger</span>
      </Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </HCollapsible>
  );
});

export const HCollapsible = component$(() => {
  return (
    <Collapsible.Root>
      <Slot />
    </Collapsible.Root>
  );
});
