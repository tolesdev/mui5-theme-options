import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithRef, FC } from 'react';

const AccordionHeader: FC<
    ComponentPropsWithRef<typeof AccordionPrimitive.Header>
> = (props) => {
    const { children, className, ...rest } = props;

    return (
        <AccordionPrimitive.Header
            className={`px-4 py-4 text-3xl text-green-300 font-semibold font-mono open:border-b-4 open:border-pink-500`}
            {...rest}
        >
            <AccordionPrimitive.Trigger>{children}</AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
};

export default AccordionHeader;
