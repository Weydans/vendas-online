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
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
