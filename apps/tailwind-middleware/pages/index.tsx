import * as Accordion from '@radix-ui/react-accordion';

export function Component() {
  return (
    <Accordion.Root type="single" collapsible defaultValue="why">
      <Accordion.Item value="what">
        <Accordion.Header>
          <Accordion.Trigger>What?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          What?What? What? What? What? What? What? What? What? What? What? What?{' '}
          What? What? What? What? What? What? What? What? What? What? What?{' '}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="when">
        <Accordion.Header>
          <Accordion.Trigger>When?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          When?When? When? When? When? When? When? When? When? When? When? When?{' '}
          When? When? When? When? When? When? When? When? When? When? When?{' '}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="why">
        <Accordion.Header>
          <Accordion.Trigger>Why?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Why?Why?Why?Why?Why?Why?Why?Why?Why?Why?Why?Why?Why?Why?Why?
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="how">
        <Accordion.Header>
          <Accordion.Trigger>How?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          How? How? How? How? How? How? How? How? How? How? How? How? How? How?{' '}
          How? How? How? How? How? How? How? How? How? How? How? How? How?{' '}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default Component;
