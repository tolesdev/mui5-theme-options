import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithRef, FC } from 'react';

const AccordionRoot: FC<ComponentPropsWithRef<typeof AccordionPrimitive.Root>> =
    (props) => {
        const { children, className, ...rest } = props;

        return (
            <AccordionPrimitive.Root
                className={'bg-indigo-700 shadow w-96 rounded-lg'}
                {...rest}
            >
                {children}
            </AccordionPrimitive.Root>
        );
    };

export default AccordionRoot;
