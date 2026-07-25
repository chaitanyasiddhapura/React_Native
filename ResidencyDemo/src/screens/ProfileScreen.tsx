import React from 'react';
import {
  Container,
  HeaderSection,
  HeaderRow,
  BackButton,
  HeaderTitle,
  ProfileImage,
  UserName,
  UserBadge,
  BadgeText,
  InfoCard,
  InfoRow,
  IconCircle,
  InfoTextContainer,
  Label,
  Value,
  Divider,
  ActivitySection,
  ActivityTitle,
  ActivityContainer,
  ActivityCard,
  ActivityNumber,
  ActivityLabel,
  ButtonContainer,
  PrimaryButton,
  PrimaryButtonText,
  SecondaryButton,
  SecondaryButtonText,
  ScrollContainer,
  IconImage,
} from './ProfileScreenStyles';

const profileData = [
  {
    label: 'Email',
    value: 'john.doe@example.com',
    icon: require('@assets/icons/email.png'),
  },
  {
    label: 'Phone',
    value: '+1 234 567 8900',
    icon: require('@assets/icons/phone.png'),
  },
  {
    label: 'Unit Number',
    value: 'A-402',
    icon: require('@assets/icons/home.png'),
  },
  {
    label: 'Building',
    value: 'Tower A',
    icon: require('@assets/icons/location.png'),
  },
];

const ProfileScreen = () => {
  return (
    <Container>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <HeaderRow>
            <BackButton activeOpacity={0.8}>
              <HeaderTitle>{'←'}</HeaderTitle>
            </BackButton>

            <HeaderTitle>Profile</HeaderTitle>
          </HeaderRow>

          <ProfileImage
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
          />

          <UserName>John Doe</UserName>

          <UserBadge>
            <BadgeText>Resident</BadgeText>
          </UserBadge>
        </HeaderSection>

        <InfoCard>
          {profileData.map((item, index) => (
            <React.Fragment key={index}>
              <InfoRow>
                <IconCircle>
                  <IconImage source={item.icon} />
                </IconCircle>

                <InfoTextContainer>
                  <Label>{item.label}</Label>
                  <Value>{item.value}</Value>
                </InfoTextContainer>
              </InfoRow>
              {index !== profileData.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </InfoCard>

        <ActivitySection>
          <ActivityTitle>My Activity</ActivityTitle>

          <ActivityContainer>
            <ActivityCard>
              <ActivityNumber>12</ActivityNumber>

              <ActivityLabel>Notices{'\n'}Read</ActivityLabel>
            </ActivityCard>

            <ActivityCard>
              <ActivityNumber blue>3</ActivityNumber>

              <ActivityLabel>Events{'\n'}RSVP</ActivityLabel>
            </ActivityCard>

            <ActivityCard>
              <ActivityNumber orange>5</ActivityNumber>

              <ActivityLabel>Guests{'\n'}Added</ActivityLabel>
            </ActivityCard>
          </ActivityContainer>

          <ButtonContainer>
            <PrimaryButton activeOpacity={0.8}>
              <PrimaryButtonText>Edit Profile</PrimaryButtonText>
            </PrimaryButton>

            <SecondaryButton activeOpacity={0.8}>
              <SecondaryButtonText>View My Documents</SecondaryButtonText>
            </SecondaryButton>
          </ButtonContainer>
        </ActivitySection>
      </ScrollContainer>
    </Container>
  );
};

export default ProfileScreen;
