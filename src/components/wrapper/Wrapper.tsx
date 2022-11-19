import React from 'react';

import './wrapper.css';

// #TODO: É necessário um tipo que já é opcional ser do tipo undefined?
type WrapperProps = {
  inputRef?: React.MutableRefObject<null>;
  children?: React.ReactNode;
  id?: string | undefined;
  styleClasses?: string[] | undefined;
};

const buildClassesNames = (styleClasses: string[] | undefined) =>
  styleClasses
    ? styleClasses?.length > 0
      ? `wrapper ${styleClasses?.join()?.replace(',', ' ')}`
      : 'wrapper'
    : 'wrapper';

// #TODO #TESTAR: É necessário iniciar as variaveis como undefined?
const Wrapper = ({
  inputRef,
  children,
  id = undefined,
  styleClasses = undefined,
}: WrapperProps) => (
  <div id={id ? id : ''} className={buildClassesNames(styleClasses)} ref={inputRef}>
    {children}
  </div>
);

export default Wrapper;
