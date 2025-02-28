import { View, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native";

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
  icon?: () => React.ReactNode;
};
const Input = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  onChangeText,
  secureTextEntry,
  onBlur,
  icon,
}: InputProps) => {
  return (
    <View
      style={[
        inputWrapperStyle,
        {
          marginTop: 20,
          backgroundColor: "#F4F5F7",
          width: "100%",
          borderRadius: 50,
          paddingHorizontal: 15,
          flexDirection: "row",
          gap: 10,
          height: 55,
          alignItems: "center",
        },
      ]}
    >
      {icon && icon()}

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
            fontSize: 16,flex:1
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input;
