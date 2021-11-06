import { InputUnstyled, InputUnstyledProps } from '@mui/core';
import React from 'react';
import type { PropsWithChildren } from 'react';

const Input = React.forwardRef<HTMLInputElement, InputUnstyledProps>(
  (props, ref) => (
    <InputUnstyled
      ref={ref}
      {...props}
      components={{
        Input: TailwindInput,
        Root: InputRoot,
      }}
    />
  )
);

Input.displayName = 'Input';

const TailwindInput = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & {
    ownerState: Record<string, unknown>;
  }
>((props, ref) => {
  // ownerState contains MUI state information
  // at the very least it needs to be stripped so not to be injected into the DOM
  // it could also be leveraged for additional stylistic/logical choices
  const { ownerState, ...rest } = props;

  return (
    <input
      {...rest}
      ref={ref}
      className="border-2 rounded-md border-indigo-600"
    />
  );
});

TailwindInput.displayName = 'StyledInput';

const InputRoot = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<
    JSX.IntrinsicElements['input'] & {
      ownerState: Record<string, unknown>;
    }
  >
>((props, ref) => {
  // strip ownerState, and className to remove Mui classes
  const { ownerState, children, className, ...rest } = props;

  return (
    <div {...rest} ref={ref}>
      {children}
    </div>
  );
});

InputRoot.displayName = 'InputContainer';

export default Input;
