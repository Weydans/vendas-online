import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const ContainerLogin = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  max-width: 460px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

export const LogoImage = styled.img`
  max-height: 120px;
`;

export const LoginTitle = styled(Title)``;
