import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { useForm, Controller } from 'react-hook-form';
import { LoginSchema } from '@/schema/loginSchema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '../components/ErrorMessage';

type FormData = z.infer<typeof LoginSchema>;

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data); // Added more descriptive logging
  };

  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require('@/assets/images/logo-red.png')}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <AppTextInput
              value={value}
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={onChange}
              onBlur={onblur}
              textContentType="emailAddress"
            />
            <ErrorMessage
              error={errors.email?.message}
              visible={!!errors.email}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <AppTextInput
              value={value}
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              textContentType="password"
            />
            <ErrorMessage
              error={errors.password?.message}
              visible={!!errors.password}
            />
          </>
        )}
      />

      <AppButton title="Login" onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
