import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from "react-native";
import { RegularText } from "./MyText";

type InputProps = {
  placeholder: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onBlur?: any;
  title?: string;
  icon?: () => React.ReactNode;
};
const Input2 = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  onChangeText,
  secureTextEntry,
  onBlur,
  title,
  icon,
}: InputProps) => {
  return (
    <View style={[{ width: "100%" }, inputWrapperStyle, { marginTop: 20 }]}>
      <Text
        style={{
          marginBottom: -5,
          marginLeft: 3,
          color: "black",
          fontWeight: "500",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          marginTop: 15,
          backgroundColor: "#F4F5F7",
          width: "100%",
          borderRadius: 15,
          paddingHorizontal: 15,
          flexDirection: "row",
          gap: 10,
          height: 55,
          alignItems: "center",
        }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          style={[
            {
              color: "gray",
              fontSize: 16,
              flex: 1,
            },
            inputStyle,
          ]}
        />
        {icon && icon()}
      </View>
    </View>
  );
};

export default Input2;
