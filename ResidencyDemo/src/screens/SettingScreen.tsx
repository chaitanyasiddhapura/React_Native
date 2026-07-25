import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  SectionTitle,
  Card,
  Row,
  LeftSection,
  IconCircle,
  RowTextContainer,
  Title,
  Subtitle,
  RightArrow,
  Toggle,
  Divider,
  LogoutCard,
  LogoutIconCircle, 
  LogoutIcon,
  LogoutTitle,
  LogoutSubtitle,
  IconImage,
} from "./SettingsScreenStyles";

const settingsData = [
  {
    section: "ACCOUNT SETTINGS",
    items: [
      {
        title: "Edit Profile",
        subtitle: "Update your personal information",
        icon: require('@assets/icons/profile.png'),
        type: "arrow",
        tntColor: "#336405",
        bgColor: "#E8F5E9", 
      },
      {
        title: "Push Notifications",
        subtitle: "Enable push notifications",
        icon: require('@assets/icons/notification.png'),
        type: "toggle",
        value: true,
        tntColor: "#336405",
        bgColor: "#E8F5E9", 
      },
      {
        title: "Email Notifications",
        subtitle: "Receive email updates",
        icon: require('@assets/icons/notification.png'),
        type: "toggle",
        value: true,
        tntColor: "#336405",
        bgColor: "#E8F5E9", 
      },
    ],
  },

  {
    section: "PRIVACY & SECURITY",
    items: [
      {
        title: "Change Password",
        subtitle: "Update your password",
        icon: require('@assets/icons/lock.png'),
        type: "arrow",
        tntColor: "#154f86",
        bgColor: "#e8edf5"
      },
      {
        title: "Two-Factor Authentication",
        subtitle: "Add extra security",
        icon: require('@assets/icons/lock.png'),
        type: "toggle",
        value: false,
        tntColor: "#154f86",
        bgColor: "#e8edf5"
      },
      {
        title: "Privacy Settings",
        subtitle: "Manage your privacy",
        icon: require('@assets/icons/lock.png'),
        type: "arrow",
        tntColor: "#154f86",
        bgColor: "#e8edf5"
      },
    ],
  },

  {
    section: "APP SETTINGS",
    items: [
      {
        title: "Language",
        subtitle: "English",
        icon: require('@assets/icons/language.png'),
        type: "arrow",
        tntColor: "#9a2c89",
        bgColor: "#f8ebf5"
      },
      {
        title: "Help & Support",
        subtitle: "Get help and support",
        icon: require('@assets/icons/help.png'),
        type: "arrow",
        tntColor: "#9a2c89",
        bgColor: "#f8ebf5"
      },
      {
        title: "About",
        subtitle: "App version 1.0.0",
        icon: require('@assets/icons/about.png'),
        type: "arrow",
        tntColor: "#9a2c89",
        bgColor: "#f8ebf5"
      },
    ],
  },
];

const SettingsScreen = () => {
  return (
    
    <Container>
      <Header>
        <BackButton>
          <HeaderTitle>{"←"}</HeaderTitle>
        </BackButton>

        <HeaderTitle>Settings</HeaderTitle>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        {settingsData.map((section, sectionIndex) => (
          <>
            <SectionTitle>{section.section}</SectionTitle>

            <Card>
              {section.items.map((item, index) => (
                <>
                  <Row activeOpacity={0.8}>
                    <LeftSection>
                      <IconCircle backgroundColor={item.bgColor}>
                        <IconImage
                          source={item.icon}
                          tintColor={item.tntColor}
                        />
                      </IconCircle>

                      <RowTextContainer>
                        <Title>{item.title}</Title>
                        <Subtitle>{item.subtitle}</Subtitle>
                      </RowTextContainer>
                    </LeftSection>

                    {item.type === "arrow" ? (
                      <RightArrow>›</RightArrow>
                    ) : (
                      <Toggle
                        value={item.value}
                        trackColor={{
                          false: "#D9D9D9",
                          true: "#0B001F",
                        }}
                        thumbColor="#FFFFFF"
                      />
                    )}
                  </Row>

                  {index !== section.items.length - 1 && <Divider />}
                </>
              ))}
            </Card>
          </>
        ))}
        <LogoutCard activeOpacity={0.8}>
          <LeftSection>
            <LogoutIconCircle>
              {/* <LogoutIcon>↪</LogoutIcon> */}
              <LogoutIcon source={require('@assets/icons/logout.png')} 
              tintColor= "#ff4d4f"
              />
            </LogoutIconCircle>

            <RowTextContainer>
              <LogoutTitle>Logout</LogoutTitle>
              <LogoutSubtitle>Sign out of your account</LogoutSubtitle>
            </RowTextContainer>
          </LeftSection>
        </LogoutCard>

      </ScrollView>
    </Container>
  );
};

export default SettingsScreen;