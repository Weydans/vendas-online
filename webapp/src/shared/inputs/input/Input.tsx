import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { InputBox, InputLabel } from './input.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <InputBox>
      {label && <InputLabel>{label}</InputLabel>}
      <InputAntd {...props} />
    </InputBox>
  );
};

export default Input;
