import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LogoImage src="./logo.png" />
        <Input label="USUÁRIO" />
        <Input label="SENHA" />
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
