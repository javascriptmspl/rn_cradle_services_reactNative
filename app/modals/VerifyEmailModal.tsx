import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {MediumText, SmallText} from '../components/MyText';
import PrimaryBtn from '../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams, RootStackParams} from '../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign'

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const VerifyEmailModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '85%',
              height: 380,
              borderRadius: 25,
              overflow: 'hidden',
              backgroundColor: COLORS.white,
              marginBottom: 50,
              padding: 20,
            }}>
              <AntDesign style={{alignSelf:'center', marginVertical:15}} name="checkcircle" size={60} color={COLORS.lightBlue} />
            <View style={{alignItems: 'center'}}>
              <MediumText bold style={{fontSize: 20, marginBottom: 15, marginTop:10}}>
                Congratulation
              </MediumText>

              <SmallText >
                Your account is ready to use. You will be
              </SmallText>
              <SmallText>
                redirected to home page in a 
              </SmallText>
              <SmallText
                style={{ marginBottom: 40}}>
                few seconds
              </SmallText>
            </View>
            <PrimaryBtn
              onPress={() => {
                navigation.navigate('LanguageSelect'), onHide;
              }}
              text="Continue to Home"
              textStyle={{fontSize: 15}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default VerifyEmailModal;

const styles = StyleSheet.create({});
