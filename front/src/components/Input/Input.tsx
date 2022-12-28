import { FC, InputHTMLAttributes } from 'react';
import Checkbox1 from './Checkbox/Checkbox';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  icon?: JSX.Element;
};

const Input: FC<Props> = props => {
  switch (props.type) {
    case 'text' || 'number':
      return <input {...props} />;
    case 'checkbox':
      return <Checkbox1 {...props} />;
    default:
      return <input {...props} />;
  }
};

export default Input;
