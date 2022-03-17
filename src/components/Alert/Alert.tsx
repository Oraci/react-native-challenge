import React from 'react';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import TextLabel from '../../components/TextLabel';
import Button from '../../components/Button';
import { AlertProps } from './types';
import { Container, AnimationContainer, ContainerButton } from './styles';

const Alert = ({ open, message, btConfirm }: AlertProps) => {
  return (
    <Modal isVisible={open} backdropOpacity={0.7} backdropColor="#707070">
      <Container>
        <AnimationContainer>
          <LottieView
            style={{ flex: 1 }}
            source={require('../../assets/added.json')}
            autoPlay
            loop={false}
          />
        </AnimationContainer>
        <TextLabel fontSize={20} fontWeight="600">
          {message}
        </TextLabel>
        <ContainerButton>
          <Button label="OK" onPress={() => btConfirm()} />
        </ContainerButton>
      </Container>
    </Modal>
  );
};

export default Alert;
