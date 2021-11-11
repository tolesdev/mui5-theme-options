import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithRef, FC } from 'react';

const AccordionContent: FC<
    ComponentPropsWithRef<typeof AccordionPrimitive.Content>
> = (props) => {
    const { children, className, ...rest } = props;

    return (
        <AccordionPrimitive.Content
            className={'p-4 text-sm font-sans lowercase text-indigo-200'}
            {...rest}
        >
            {children}
        </AccordionPrimitive.Content>
    );
};

export default AccordionContent;
