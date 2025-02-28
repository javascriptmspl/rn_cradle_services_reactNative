import {StyleProp, TextStyle, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {FONTS} from '../../assets/fonts';

type Props = {
  children: string | React.ReactNode | any;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
};

export const RegularText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 16,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const RegularTextGray = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.grey,
          fontSize: 16,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const TitleText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 18,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.grey,
          fontSize: 13,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallTextB = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 13,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText10 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.grey,
          fontSize: 10,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText10B = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 10,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const MediumText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 20,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const BigText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 30,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Text25 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 25,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Text22 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 22,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Text16 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 16,
          fontWeight: bold ? '700' : 'normal',
          // fontFamily: FONTS['Marcellus-Regular'],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

