import Accordion from '../components/Accordion';

export function Component() {
    return (
        <div className="container mx-auto pt-8">
            <Accordion type="single" defaultValue="3">
                <Accordion.Item value="1">
                    <Accordion.Header>1</Accordion.Header>
                    <Accordion.Content>CONTENT</Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="2">
                    <Accordion.Header>2</Accordion.Header>
                    <Accordion.Content>CONTENT</Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="3">
                    <Accordion.Header>3</Accordion.Header>
                    <Accordion.Content>CONTENT</Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="4">
                    <Accordion.Header>4</Accordion.Header>
                    <Accordion.Content>CONTENT</Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Component;
