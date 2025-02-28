import {
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    TextStyle,
    ActivityIndicator,
  } from 'react-native';
  import React from 'react';
  import {COLORS} from '../styles';
  import {RegularText} from './MyText';
  
  type Props = {
    text: string;
    loading?: boolean;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
  };
  
  const SecondaryBtn = ({
    text,
    loading,
    onPress,
    containerStyle,
    textStyle,
  }: Props) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            // marginHorizontal: 15,
            height: 55,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',borderWidth:2,
            borderColor:COLORS.primary
          },
          containerStyle,
        ]}>
        {loading ? (
          <ActivityIndicator size={'small'} color={'#FFF'} />
        ) : (
          <RegularText
            style={[
              {color: COLORS.primary, fontSize: 17, fontWeight: '500'},
              textStyle,
            ]}>
            {text}
          </RegularText>
        )}
      </TouchableOpacity>
    );
  };
  
  export default SecondaryBtn;
  