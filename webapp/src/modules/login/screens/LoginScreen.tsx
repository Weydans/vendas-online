import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LoginTitle,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LogoImage src="./logo.png" />
        <LoginTitle level={2} type="secondary">
          LOGIN
        </LoginTitle>
        <Input label="USUÁRIO" />
        <Input label="SENHA" />
        <Button type="primary" margin="10px 0">
          ENTRAR
        </Button>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
