import { Text, FlatList, TouchableOpacity, Share } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "./sheets";

const options = [
  { name: "Driving Licence",  },
  { name: "Passport", },
];

const IdProofSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.GenderSelectSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{ height: 150, padding: 20 }}
        data={options}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.onSelect(item.name);
                SheetManager.hide(SHEETS.GenderSelectSheet);
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "black",
                  padding: 5,
                  margin: 5,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ActionSheet>
  );
};

export default IdProofSheet;
