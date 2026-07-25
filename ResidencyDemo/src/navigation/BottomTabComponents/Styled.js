import styled from 'styled-components/native';

export const TabButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: 100%;
`;

export const Icon = styled.Image`
margin-top: 10px;
  width: 24px;
  height: 24px;
  resize-mode: contain;
  margin-bottom: 6px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-weight: 600;
  width: 70px;
  text-align: center;
`;

export const ActiveLine = styled.View`
  width: 100%;
  height: 3px;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;