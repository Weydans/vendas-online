import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { InputBox, InputLabel } from './input.styles';

interface InputProps extends InputPropsAntd {
  label?: string;
  margin?: string;
}

const Input = ({ label, margin, ...props }: InputProps) => {
  return (
    <InputBox style={margin ? { margin } : { margin: '10px 0' }}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputAntd {...props} />
    </InputBox>
  );
};

export default Input;
