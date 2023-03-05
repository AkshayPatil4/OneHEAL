import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import OneHealSafeArea from '../../components/OneHealSafeArea';
import { Button, useTheme } from 'react-native-paper';
import { lightGreen } from '../../sharedStyles';
import { StatusBar } from 'expo-status-bar';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const theme = useTheme();
  const { t } = useTranslation();
  const regester = <I18nextProvider i18n={i18n}> <Text>{t('register')}</Text> </I18nextProvider>

  return (
    <ImageBackground
      source={require('../../assets/images/welcome.png')}
      style={[
        styles.imageBackground,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <StatusBar style='dark' />
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo-full-1.png')}
            resizeMode='contain'
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode='contained'
            buttonColor={theme.colors.tertiary}
            style={styles.button}
            onPress={() =>
              navigation.navigate('NotAuth', { screen: 'RegisterScreen' })
            }
          >
            {regester}
          </Button>
          <Button
            mode='outlined'
            style={styles.button}
            onPress={() =>
              navigation.navigate('NotAuth', { screen: 'LoginScreen' })
            }
          >
            <I18nextProvider i18n={i18n}> <Text>{t('login')}</Text> </I18nextProvider>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageBackground: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { flex: 1 },
  buttonContainer: {
    flex: 1,
  },
  button: {
    paddingVertical: 5,
    marginBottom: 30,
  },
});
