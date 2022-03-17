import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const CenterLoading = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
}

export default CenterLoading;