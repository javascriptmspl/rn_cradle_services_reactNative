import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../../styles";
import { SmallText } from "../../../components/MyText";

const TextMsg = ({ isSideLeft, item }: any) => {
  return (
    <View>
      {/* {isSideLeft ? (
        <View
          style={{
            backgroundColor: "lightgrey",
            width: 40,
            height: 40,
            borderRadius: 32,
            position: "absolute",
            left: 1,
            top: 20,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: chatUserList[0].image }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "lightgrey",
            width: 40,
            height: 40,
            borderRadius: 32,
            position: "absolute",
            right: 2,
            top: 20,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: chatUserList[1].image }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
      )} */}
      <View
        style={
          {
            // marginLeft: isSideLeft ? 40 : 0,
            // marginRight: isSideLeft ? 0 : 40,
          }
        }
      >
        <View
          style={{
            backgroundColor: isSideLeft ? COLORS.primary : "rgba(0,0,0,0.04)",
            alignSelf: isSideLeft ? "flex-start" : "flex-end",
            padding: 5,
            maxWidth: "75%",
            marginVertical: 10,
            marginTop: 15,
            borderRadius: 15,
            paddingHorizontal: 10,
            borderBottomRightRadius: isSideLeft ? 15 : 0,
            borderBottomLeftRadius: isSideLeft ? 0 : 15,
            marginBottom: 5,
            marginRight: 10,
            marginLeft: isSideLeft ? 10 : 0,
          }}
        >
          <Text
            style={{
              color: isSideLeft ? "white" : COLORS.black,
              padding: 5,
              fontSize: 14,
            }}
          >
            {item?.item}
          </Text>
        </View>
        <View
          style={{
            alignSelf: isSideLeft ? "flex-start" : "flex-end",
          }}
        >
          <SmallText style={{ color: COLORS.grey }}>9:27 AM</SmallText>
        </View>
      </View>
    </View>
  );
};

export default TextMsg;
