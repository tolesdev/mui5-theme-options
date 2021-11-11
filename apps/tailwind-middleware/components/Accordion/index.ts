import AccordionRoot from './AccordionRoot';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';

type AccordionComponent = typeof AccordionRoot & {
    Header: typeof AccordionHeader;
    Content: typeof AccordionContent;
    Item: typeof AccordionItem;
};

const Accordion = AccordionRoot as AccordionComponent;

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;

export default Accordion;
