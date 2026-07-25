import React from 'react';
import styled from 'styled-components/native';

const HomeScreen = ({ navigation }: any) => {

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const renderItem = ({ item }: any) => (
    <ItemContainer>
      <ItemText>{item.title}</ItemText>
    </ItemContainer>
  );

  return (
    <Container>
      <Title>Welcome</Title>

      <StyledList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <BtnLogout onPress={() => navigation.navigate('Login')}>
        <BtnText>Logout</BtnText>
      </BtnLogout>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fa;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const StyledList = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 20,
  },
})``;

const ItemContainer = styled.View`
  background-color: #fff;
  padding: 12px;
  margin-vertical: 5px;
  border-radius: 8px;
  width: 200px;
  align-items: center;
`;

const ItemText = styled.Text`
  color: #333;
`;

const BtnLogout = styled.TouchableOpacity`
  width: 100px;
  height: 45px;
  background-color: #fd0000;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
`;

const BtnText = styled.Text`
  color: #fff;
  font-weight: 600;
`;