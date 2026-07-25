import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f4f5f7;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #f4f5f7;
`;

export const HeaderSection = styled.View`
  background-color: #2f8f57;
  padding-top: 20px;
  padding-bottom: 90px;
  align-items: center;
`;

export const HeaderRow = styled.View`
  width: 100%;
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
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

export const ProfileImage = styled.Image`
  width: 115px;
  height: 115px;
  border-radius: 57px;
  margin-top: 30px;
  border-width: 4px;
  border-color: rgba(255, 255, 255, 0.85);
`;

export const UserName = styled.Text`
  margin-top: 18px;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
`;

export const UserBadge = styled.View`
  margin-top: 10px;
  padding-horizontal: 14px;
  padding-vertical: 6px;
  border-width: 0.5px;
  border-color: #f8f8f8bd;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.14);
`;

export const BadgeText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
`;

export const InfoCard = styled.View`
  background-color: #ffffff;
  margin-horizontal: 20px;
  margin-top: -55px;
  border-radius: 24px;
  overflow: hidden;

  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 4;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 22px 20px;
`;

export const IconCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #eef7f1;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const InfoTextContainer = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #8b8b8b;
`;

export const IconImage = styled.Image`
  height: 20px;
  width: 20px;
  tint-color:  #336405;
`;


export const Value = styled.Text`
  margin-top: 3px;
  font-size: 17px;
  font-weight: 700;
  color: #1f2937;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #f0f0f0;
  margin-left: 0px;
`;

export const ActivitySection = styled.View`
  margin-top: 30px;
  padding-horizontal: 20px;
`;

export const ActivityTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 18px;
`;

export const ActivityContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActivityCard = styled.View`
  width: 31%;
  background-color: #ffffff;
  border-radius: 18px;
  padding-vertical: 24px;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 5px;
  elevation: 2;
`;

export const ActivityNumber = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${({ blue, orange }) =>
    blue ? "#2563eb" : orange ? "#ea580c" : "#2f8f57"};
`;

export const ActivityLabel = styled.Text`
  margin-top: 10px;
  font-size: 13px;
  text-align: center;
  color: #7b7b7b;
  font-weight: 600;
  line-height: 18px;
`;

export const ButtonContainer = styled.View`
  margin-top: 28px;
  margin-bottom: 50px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  height: 58px;
  background-color: #2f8f57;
  border-radius: 18px;
  justify-content: center;
  align-items: center;

  shadow-color: #2f8f57;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  elevation: 3;
`;

export const PrimaryButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const SecondaryButton = styled.TouchableOpacity`
  height: 58px;
  border-width: 1.5px;
  border-color: #2f8f57;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: #ffffff;
`;

export const SecondaryButtonText = styled.Text`
  color: #2f8f57;
  font-size: 18px;
  font-weight: 700;
`;