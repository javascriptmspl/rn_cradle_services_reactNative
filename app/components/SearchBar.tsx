import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({onPress}: {onPress?: () => void}) => {
  return (
    <View
      style={{
        position: 'relative',
        width: '92%',
        // backgroundColor: COLORS.white,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: COLORS.black,
        alignSelf: 'center',
      }}>
      <AntDesign
        name="search1"
        style={{
          position: 'absolute',
          top: 15,
          left: 15,
          zIndex: 1,
        }}
        onPress={onPress}
        color={COLORS.black}
        size={20}
      />
      <TextInput
        style={[
          {
            paddingHorizontal: 20,
            paddingLeft: 50,
            color: COLORS.black,
          },
          Platform.OS === 'ios' ? {height: 50} : {},
        ]}
        placeholder="Search "
        placeholderTextColor={COLORS.grey}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
