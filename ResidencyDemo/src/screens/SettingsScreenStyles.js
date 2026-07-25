import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f4f5f7;
`;

export const Header = styled.View`
  height: 60px;
  background-color: #2f8f57;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 15px;
  background-color: #e9eae932;
  border-radius: 50px;
  height:35px;
  width:35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const SectionTitle = styled.Text`
  margin-top: 24px;
  margin-bottom: 12px;
  margin-horizontal: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #7a7a7a;
  letter-spacing: 1px;
`;

export const Card = styled.View`
  background-color: white;
  margin-horizontal: 16px;
  border-radius: 20px;
  overflow: hidden;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
`;

export const LeftSection = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const IconCircle = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || '#eef6f1'};
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export const RowTextContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1d;
`;

export const IconImage = styled.Image`
  height: 22px;
  width: 22px;
  tint-color: ${props => props.tintColor || '#6c6c6c'};
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  color: #7b7b7b;
  margin-top: 4px;
`;

export const RightArrow = styled.Text`
  font-size: 28px;
  color: #b0b0b0;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #ededed;
  margin-left: 74px;
`;

export const Toggle = styled.Switch``;


export const LogoutCard = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-horizontal: 16px;
  margin-top: 24px;
  border-radius: 20px;
  padding: 18px 16px;
  border-width: 1px;
  border-color: #ffdede;
  margin-bottom: 20px;
`;

export const LogoutIconCircle = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #fff1f1;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;


export const LogoutIcon = styled.Image`
  height: 20px;
  width: 20px;
`;

export const LogoutTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #e5484d;
`;

export const LogoutSubtitle = styled.Text`
  font-size: 13px;
  margin-top: 4px;
  color: #e57373;
`;