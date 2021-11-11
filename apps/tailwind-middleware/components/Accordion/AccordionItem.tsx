import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithRef, FC } from 'react';

const AccordionItem: FC<ComponentPropsWithRef<typeof AccordionPrimitive.Item>> =
    (props) => {
        const { children, className, ...rest } = props;

        return (
            <AccordionPrimitive.Item
                className={'border-b-4 border-pink-500 last:border-0'}
                {...rest}
            >
                {children}
            </AccordionPrimitive.Item>
        );
    };

export default AccordionItem;
