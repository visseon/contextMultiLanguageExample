import React from 'react';
import {
  Layout, Button, Input, ButtonGroup,
} from '@ui-kitten/components';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { useTranslations } from 'context-multi-language';

const Login = () => {
  const { t, changeLanguage, languages } = useTranslations();

  return (
    <Layout style={styles.fill} level="4">
      <SafeAreaView style={styles.fill}>
        <StatusBar barStyle="light-content" />
        <Input label={t.phoneNumber} {...getSizeProps} />
        <Space />
        <Input label={t.password} secureTextEntry {...getSizeProps} />
        <Space />
        <Button size="large">{t.singIn}</Button>
        <Space />
        <ButtonGroup>
          {languages.map((language) => (
            <Button
              key={language}
              size="tiny"
              onPress={() => changeLanguage(language)}
            >
              {language}
            </Button>
          ))}
        </ButtonGroup>
      </SafeAreaView>
    </Layout>
  );
};

const Space = () => <View style={styles.space} />;

const getSizeProps = { size: Platform.OS === 'ios' ? 'large' : 'medium' };

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fill: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  container: {},
  fillCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: { width: 0, height: 0, marginVertical: 10 },
});

export default Login;
