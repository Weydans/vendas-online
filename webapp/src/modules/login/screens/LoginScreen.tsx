import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LoginTitle,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/auth',
      data: { email, password },
    })
      .then((response) => {
        alert('Login realizado com sucesso');
        return response;
      })
      .catch((response) => {
        alert('E-mail e/ou senha inválidos');
        return response;
      });
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <SVGLogo width="180px" />
        <LoginTitle level={2} type="secondary">
          LOGIN
        </LoginTitle>
        <Input label="USUÁRIO" onChange={handleEmail} value={email} />
        <Input type="password" label="SENHA" onChange={handlePassword} value={password} />
        <Button type="primary" onClick={handleLogin}>
          ENTRAR
        </Button>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
