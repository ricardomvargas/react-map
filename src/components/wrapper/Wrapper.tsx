import React from 'react';

import './wrapper.css';

type WrapperProps = {
  inputRef?: React.MutableRefObject<null>;
  children?: React.ReactNode;
  id?: string;
  styleClasses?: string[];
};

const buildClassesNames = (styleClasses: string[] | undefined) =>
  styleClasses
    ? styleClasses?.length > 0
      ? `wrapper ${styleClasses?.join()?.replace(',', ' ')}`
      : 'wrapper'
    : 'wrapper';

const Wrapper = ({ inputRef, children, id, styleClasses }: WrapperProps) => (
  <div id={id ? id : ''} className={buildClassesNames(styleClasses)} ref={inputRef}>
    {children}
  </div>
);

export default Wrapper;
