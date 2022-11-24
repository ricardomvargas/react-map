import React from 'react';

import './wrapper.css';

type WrapperProps = {
  inputRef?: React.MutableRefObject<null>;
  children?: React.ReactNode;
  id?: string;
  cssClasses?: string[];
};

const buildClassNames = (cssClasses: string[] | undefined) =>
  cssClasses
    ? cssClasses?.length > 0
      ? `wrapper ${cssClasses?.join()?.replace(',', ' ')}`
      : 'wrapper'
    : 'wrapper';

const Wrapper = ({ inputRef, children, id, cssClasses }: WrapperProps) => (
  <div id={id ? id : ''} className={buildClassNames(cssClasses)} ref={inputRef}>
    {children}
  </div>
);

export default Wrapper;
