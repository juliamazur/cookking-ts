import * as React from 'react';

export interface Props {
  name?: string;
  handleClick?: () => void;
}

/*
  Button Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const Button = ({name = '', handleClick}: Props) => {
  return (
    <input data-test="button" type="button" value={name} onClick={handleClick} />
  );
}

export default Button;
