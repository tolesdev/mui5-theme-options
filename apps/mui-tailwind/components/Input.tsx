import { InputUnstyled, InputUnstyledProps } from '@mui/core';
import React from 'react';
import type { PropsWithChildren } from 'react';

const Input = React.forwardRef<HTMLDivElement, InputUnstyledProps>(
  (props, ref) => {
    console.log('Incoming Custom Input props:', props);
    return (
      <InputUnstyled
        {...props}
        components={{
          // redirect the `ref` to the input for react-hook-form
          Input: (props) => <StyledInput {...props} ref={ref} />,
          Root: InputContainer,
        }}
      />
    );
  }
);

Input.displayName = 'Input';

const StyledInput = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & {
    ownerState: Record<string, unknown>;
  }
>((props, ref) => {
  // ownerState contains MUI state information
  // at the very least it needs to be stripped so not to be injected into the DOM
  // it could also be leveraged for additional stylistic/logical choices
  const { ownerState, ...rest } = props;
  // console.log('ownerState', ownerState);
  return <input {...rest} ref={ref} className="border-2 border-indigo-600" />;
});

StyledInput.displayName = 'StyledInput';

const InputContainer = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<{
    ownerState: Record<string, unknown>;
  }>
>((props, ref) => {
  const { ownerState, children, ...rest } = props;
  // console.log('ownerState', ownerState);
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

InputContainer.displayName = 'InputContainer';

export default Input;
