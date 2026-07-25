import React, {useState} from 'react'
import {TouchableOpacity, Switch, Alert } from 'react-native'
import styled from 'styled-components/native';


// import styles from '../assets/css/LoginStyle'


const LoginScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () =>{
    if(email == 'abc@gmail.com' && password == '123'){
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    }else{
      Alert.alert('Check Your Email And Password again ')
    }
  }

  return (
    <Container>
      <Title>Welcome Back 👋</Title>
      <Subtitle>
        Stay connected by signing in with your email and password to access your account.
      </Subtitle>

    <SocialRow>
    <SocialButton>
        <Icon source={require('../assets/images/google.png')} />
        <SocialText>Google</SocialText>
    </SocialButton>

    <AppleButton>
        <Icon source={require('../assets/images/apple.png')}/>
        {/* <Text style={[styles.socialText, { color: '#fff' }]}>Apple</Text> */}
        <SocialText color='#fff'>Apple</SocialText>
        {/* ${props => props.bgColor} */}
    </AppleButton>
    </SocialRow>

      <DividerContainer>
        <Line/>
        <Or>OR</Or>
        <Line />
      </DividerContainer>

      <InputContainer>
        <Label>Email Address</Label>
        <Input
          placeholder="Enter your email"
          placeholderTextColor="#999"
          onChangeText = {setEmail}
          value = {email}
        />

        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText = {setPassword}
          value = {password}
        />
      </InputContainer>

      <Row>
        <RememberMe>
          <Switch />
          <RememberText>Remember me</RememberText>
        </RememberMe>
        <TouchableOpacity>
          <Forgot>Forgot Password?</Forgot>
        </TouchableOpacity>
      </Row>

      <SignInButton onPress={handleLogin} >
        <SignInText>Sign In</SignInText>
      </SignInButton>

      <Footer>
        <FooterText>Don’t have an account?</FooterText>
        <TouchableOpacity>
          <Signup> Sign up</Signup>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}

export default LoginScreen


const Container = styled.View`
  flex: 1;
  background-color: #f7f8fa;
  padding: 20px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
`;

const SocialRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

const SocialButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #fff;
  padding: 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #eee;
`;

const AppleButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #000;
  padding: 12px;
  border-radius: 10px;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;

const SocialText = styled.Text`
  font-weight: 500;
  color: ${(props) => props.color || '#333'};
`;

const DividerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 20px;
`;

const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

const Or = styled.Text`
  margin-horizontal: 10px;
  color: #888;
`;

const InputContainer = styled.View`
  gap: 10px;
`;

const Label = styled.Text`
  font-size: 13px;
  color: #555;
  margin-top: 10px;
`;

const Input = styled.TextInput`
  background-color: #fff;
  padding: 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #eee;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 15px;
`;

const RememberMe = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const RememberText = styled.Text`
  color: #555;
`;

const Forgot = styled.Text`
  color: #000;
  font-weight: 500;
`;

const SignInButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
`;

const SignInText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const FooterText = styled.Text`
  color: #666;
`;

const Signup = styled.Text`
  color: #000;
  font-weight: 600;
`;