import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import {
  Container,
  HeaderContainer,
  SmallTitle,
  MainTitle,
  ProfileImage,
  HorizontalScroll,
  ServiceCard,
  ServiceIconCircle,
  ServiceIcon,
  ServiceTitle,
  Badge,
  BadgeText,
  PaginationContainer,
  Dot,
  ForumCard,
  ForumTitle,
  ForumSubtitle,
  NewBadge,
  NewBadgeText,
  JoinButton,
  JoinButtonText,
  SectionTitle,
  FeaturesContainer,
  FeatureCard,
  FeatureIconCircle,
  FeatureIcon,
  FeatureTitle,
  RecentSection,
  RecentTitle,
  RecentCard,
  RecentRow,
  RecentIconCircle,
  RecentIcon,
  RecentTextContainer,
  RecentHeading,
  RecentSubtitle,
  RecentTime,
  RecentDivider,
  AdminSection,
  AdminTitle,
  AdminGrid,
  AdminCard,
  AdminIcon,
  AdminText,
  FloatingButton,
  FloatingButtonText,
} from './HomeScreenStyles';

const { width } = Dimensions.get('window');

const services = [
  {
    title: 'Notices',
    icon: require('@assets/icons/notices.png'),
    badge: 3,
  },
  {
    title: 'Events',
    icon: require('@assets/icons/events.png'),
    badge: 2,
  },
  {
    title: 'Polls',
    icon: require('@assets/icons/poll.png'),
    badge: 1,
  },
  {
    title: 'Complaints',
    icon: require('@assets/icons/complaints.png'),
    badge: 0,
  },
  {
    title: 'Invoices',
    icon: require('@assets/icons/invoices.png'),
    badge: 5,
  },
  {
    title: 'Ads',
    icon: require('@assets/icons/ads.png'),
    badge: 0,
  },
];

const features = [
  {
    title: 'Resident',
    icon: require('@assets/icons/resident.png'),
    tintColor: '#336405',
    bgColor: '#E8F5E9',
  },
  {
    title: 'Vehicles',
    icon: require('@assets/icons/vehicles.png'),
    tintColor: '#223c82',
    bgColor: '#e0ebf8',
  },
  {
    title: 'Facilities',
    icon: require('@assets/icons/facilities.png'),
    tintColor: '#c6a144',
    bgColor: '#fff5d5',
  },
  {
    title: 'Gallery',
    icon: require('@assets/icons/gallery.png'),
    tintColor: '#7a449d',
    bgColor: '#f5e2ff',
  },
  {
    title: 'Help Desk',
    icon: require('@assets/icons/help.png'),
    tintColor: '#9a3592',
    bgColor: '#ffeffc',
  },
  {
    title: 'My Ads',
    icon: require('@assets/icons/ads.png'),
    tintColor: '#349a96',
    bgColor: '#d7feff',
  },
  {
    title: 'Parking',
    icon: require('@assets/icons/parking.png'),
    tintColor: '#d19144',
    bgColor: '#fae4db',
  },
  {
    title: 'Professions',
    icon: require('@assets/icons/professions.png'),
    tintColor: '#7a449d',
    bgColor: '#f5e2ff',
  },
];

const recentUpdates = [
  {
    title: 'New Notice Posted',
    subtitle: 'Maintenance scheduled for 20th April',
    time: '2 hours ago',
    icon: require('@assets/icons/notices.png'),
    tintColor: '#336405',
    bgColor: '#E8F5E9',
  },
  {
    title: 'Upcoming Event',
    subtitle: 'Community Gathering - 18th April, 6 PM',
    time: '5 hours ago',
    icon: require('@assets/icons/events.png'),
    tintColor: '#223c82',
    bgColor: '#e0ebf8',
  },
  {
    title: 'Invoice Generated',
    subtitle: 'Monthly maintenance bill - April 2026',
    time: '1 day ago',
    icon: require('@assets/icons/notification.png'),
    tintColor: '#c6a144',
    bgColor: '#fff5d5',
  },
];

const adminActions = [
  {
    title: 'Add Notice',
    icon: require('@assets/icons/addNotice.png'),
    tintColor: '#336405',
  },
  {
    title: 'Create Events',
    icon: require('@assets/icons/createEvents.png'),
    tintColor: '#223c82',
  },
  {
    title: 'Booking\nRequests',
    icon: require('@assets/icons/bookingnRequests.png'),
    tintColor: '#c6a144',
  },
  {
    title: 'Accounts',
    icon: require('@assets/icons/accounts.png'),
    tintColor: '#7a449d',
  },
  {
    title: 'User Requests',
    icon: require('@assets/icons/userRequests.png'),
    tintColor: '#9a3592',
  },
  {
    title: 'Reports',
    icon: require('@assets/icons/reports.png'),
    tintColor: '#349a96',
  },
];

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleScroll = event => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / (width * 0.34),
    );

    setActiveIndex(slide);
  };

  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <SmallTitle>MY RESIDENCE</SmallTitle>

          <MainTitle>Hi, Alexander</MainTitle>

          <ProfileImage
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
          />
        </HeaderContainer>

        <HorizontalScroll
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {services.map((item, index) => (
            <ServiceCard key={index}>
              {item.badge > 0 && (
                <Badge>
                  <BadgeText>{item.badge}</BadgeText>
                </Badge>
              )}

              <ServiceIconCircle>
                <ServiceIcon source={item.icon} tintColor="#ffffff" />
              </ServiceIconCircle>

              <ServiceTitle>{item.title}</ServiceTitle>
            </ServiceCard>
          ))}
        </HorizontalScroll>

        <PaginationContainer>
          {[...Array(4)].map((_, index) => (
            <Dot active={activeIndex === index} key={index} />
          ))}
        </PaginationContainer>

        <ForumCard>
          <NewBadge>
            <NewBadgeText>New</NewBadgeText>
          </NewBadge>

          <ForumTitle>Community Forum</ForumTitle>

          <ForumSubtitle>Connect with your neighbors</ForumSubtitle>

          <JoinButton activeOpacity={0.8}>
            <JoinButtonText>Join Now</JoinButtonText>
          </JoinButton>
        </ForumCard>

        <SectionTitle>Features</SectionTitle>

        <FeaturesContainer>
          {features.map((item, index) => (
            <FeatureCard key={index}>
              <FeatureIconCircle backgroundColor={item.bgColor}>
                <FeatureIcon source={item.icon} tintColor={item.tintColor} />
              </FeatureIconCircle>

              <FeatureTitle>{item.title}</FeatureTitle>
            </FeatureCard>
          ))}
        </FeaturesContainer>

        <RecentSection>
          <RecentTitle>Recent Updates</RecentTitle>

          <RecentCard>
            {recentUpdates.map((item, index) => (
              <React.Fragment key={index}>
                <RecentRow>
                  <RecentIconCircle backgroundColor={item.bgColor}>
                    <RecentIcon source={item.icon} tintColor={item.tintColor} />
                  </RecentIconCircle>

                  <RecentTextContainer>
                    <RecentHeading>{item.title}</RecentHeading>

                    <RecentSubtitle>{item.subtitle}</RecentSubtitle>

                    <RecentTime>{item.time}</RecentTime>
                  </RecentTextContainer>
                </RecentRow>

                {index !== recentUpdates.length - 1 && <RecentDivider />}
              </React.Fragment>
            ))}
          </RecentCard>
        </RecentSection>

        <AdminSection>
          <AdminTitle>Admin Actions</AdminTitle>

          <AdminGrid>
            {adminActions.map((item, index) => (
              <AdminCard key={index}>
                <AdminIcon source={item.icon} tintColor={item.tintColor} />

                <AdminText>{item.title}</AdminText>
              </AdminCard>
            ))}
          </AdminGrid>
        </AdminSection>
      </Container>
      <FloatingButton activeOpacity={0.8}>
        <FloatingButtonText>+</FloatingButtonText>
      </FloatingButton>
    </>
  );
};

export default HomeScreen;
