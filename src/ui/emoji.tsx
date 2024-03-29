import React from 'react';

interface Props {
  label: string;
  symbol: string;
  size: number;
}

export const Emoji = (props: Props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
    style={{ fontSize: props.size }}
  >
    {props.symbol}
  </span>
);
