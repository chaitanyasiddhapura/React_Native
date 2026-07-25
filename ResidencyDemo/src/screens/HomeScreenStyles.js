import styled from "styled-components/native";
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f6f8;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 20px;
  padding-top: 20px;
  position: relative;
  margin-top: 40px;
`;

export const SmallTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #a0a4ab;
`;

export const MainTitle = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #1f2937;
  margin-top: 6px;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-width: 2px;
  border-color: #e1e1e1;
  border-radius: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const HorizontalScroll = styled.ScrollView`
  margin-top: 26px;
  padding-left: 16px;
`;

export const ServiceCard = styled.View`
  width: 100px;
  height: 118px;
  background-color: #f1f1f1f4;
  border-radius: 10px;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #d3d3d3;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.04;
  shadow-radius: 4px;
  elevation: 2;
`;

export const ServiceIconCircle = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  background-color: #43a36c;
  justify-content: center;
  align-items: center;
`;

export const ServiceIcon = styled.Image`
  height: 22px;
  width: 22px;
  // font-size: 24px;
`;

export const ServiceTitle = styled.Text`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 700;
  color: #2d2d2d;
`;

export const Badge = styled.View`
  position: absolute;
  top: 10px;
  right: 16px;
  background-color: #ff3b30;
  min-width: 22px;
  height: 22px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5px;
  z-index: 10;
`;

export const BadgeText = styled.Text`
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
`;

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

export const Dot = styled.View`
  width: ${({ active }) => (active ? "20px" : "7px")};
  height: 7px;
  border-radius: 4px;
  margin-horizontal: 4px;
  background-color: ${({ active }) =>
    active ? "#43a36c" : "#d1d5db"};
`;


export const Page = styled.View`
  width: ${Dimensions.get('window').width}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ForumCard = styled.View`
  background-color: #ffffff;
  margin-horizontal: 20px;
  margin-top: 28px;
  border-radius: 24px;
  padding: 22px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 5px;
  elevation: 3;
`;

export const ForumTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
`;

export const ForumSubtitle = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #6b7280;
`;

export const NewBadge = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #43a36c;
  padding-horizontal: 14px;
  padding-vertical: 6px;
  border-radius: 8px;
`;

export const NewBadgeText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
`;

export const JoinButton = styled.TouchableOpacity`
  height: 56px;
  background-color: #43a36c;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const JoinButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-top: 34px;
  margin-left: 20px;
`;

export const FeaturesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-horizontal: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const FeatureCard = styled.View`
  width: 23%;
  background-color: #ffffff;
  border-radius: 18px;
  align-items: center;
  padding-vertical: 18px;
  margin-bottom: 16px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 5px;
  elevation: 2;
`;

export const FeatureIconCircle = styled.View`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || '#eef6f1'};
  justify-content: center;
  align-items: center;
`;

export const FeatureIcon = styled.Image`
  height: 22px;
  width:22px
`;

export const FeatureTitle = styled.Text`
  margin-top: 12px;
  font-size: 13px;
  font-weight: 700;
  color: #374151;
  text-align: center;
`;

export const RecentSection = styled.View`
  margin-top: 0px;
`;

export const RecentTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-left: 20px;
  margin-bottom: 18px;
`;

export const RecentCard = styled.View`
  background-color: #ffffff;
  margin-horizontal: 20px;
  border-radius: 24px;
  overflow: hidden;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 5px;
  elevation: 3;
`;

export const RecentRow = styled.View`
  flex-direction: row;
  padding: 22px 18px;
`;

export const RecentIconCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
    background-color: ${({ backgroundColor }) =>
    backgroundColor || '#eef6f1'};
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const RecentIcon = styled.Image`
  // font-size: 22px;
  height: 22px;
  width: 22px;
`;

export const RecentTextContainer = styled.View`
  flex: 1;
`;

export const RecentHeading = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: #1f2937;
`;

export const RecentSubtitle = styled.Text`
  margin-top: 6px;
  font-size: 14px;
  color: #6b7280;
`;

export const RecentTime = styled.Text`
  margin-top: 8px;
  font-size: 13px;
  color: #9ca3af;
  font-weight: 600;
`;

export const RecentDivider = styled.View`
  height: 1px;
  background-color: #f0f0f0;
  margin-left: 84px;
`;

export const AdminSection = styled.View`
  margin-top: 34px;
  padding-horizontal: 20px;
  margin-bottom: 10px;
`;

export const AdminTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 20px;
`;

export const AdminGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AdminCard = styled.TouchableOpacity`
  width: 48%;
  background-color: #ffffff;
  border-radius: 18px;
  padding-vertical: 22px;
  padding-horizontal: 18px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 5px;
  elevation: 2;
`;

export const AdminIcon = styled.Image`
  height: 22px;
  width: 22px;
  // font-size: 22px;
  margin-right: 12px;
`;

export const AdminText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #374151;
`;

export const FloatingButton = styled.TouchableOpacity`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  background-color: #43a36c;
  position: absolute;
  right: 10px;
  bottom: 20px;
  justify-content: center;
  align-items: center;

  shadow-color: #43a36c;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 5;
`;

export const FloatingButtonText = styled.Text`
  color: #ffffff;
  font-size: 38px;
  font-weight: 300;
`;
