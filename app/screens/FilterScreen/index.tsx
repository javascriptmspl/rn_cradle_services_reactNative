import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import MainLayout from "../../components/MainLayout";
import { HomeStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RegularText, TitleText } from "../../components/MyText";
import Fontisto from "react-native-vector-icons/Fontisto";
import { COLORS } from "../../styles";

const FilterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [availabilityToday, setAvailabilityToday] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState("Any Experience");
  const [selectedSortOption, setSelectedSortOption] = useState("Popularity");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [priceRange, setPriceRange] = useState([20, 250]);

  const sortOptions = [
    "Popularity",
    "Star Rating (height first)",
    "Best Review first",
    "Height Review first",
    "Most Review first",
  ];

  const workExperienceOptions = [
    "Any Experience",
    "1-2 Years",
    "1-5 Years",
    "1-10 Years",
  ];

  return (
    <MainLayout title="Filter" onBack={navigation.goBack}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* {/ Availability Toggle /} */}
        <View style={styles.section}>
          <TitleText style={styles.sectionTitle}>Availability</TitleText>
          <View style={styles.row}>
            <RegularText bold>Availability Today</RegularText>
            <Switch
              value={availabilityToday}
              onValueChange={(value) => setAvailabilityToday(value)}
              thumbColor={availabilityToday ? "#4CAF50" : "#f4f3f4"}
              trackColor={{ false: "#E0E0E0", true: "#81C784" }}
            />
          </View>
        </View>

        {/* {/ Short Options /} */}
        <View style={styles.section}>
          <TitleText style={styles.sectionTitle}>Short Options</TitleText>
          {sortOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.radioRow}
              onPress={() => setSelectedSortOption(option)}
            >
              <RegularText bold>{option}</RegularText>

              <Fontisto
                name="radio-btn-active"
                size={20}
                color={
                  selectedSortOption === option ? COLORS.primary : "lightgray"
                }
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* {/ Gender Selection /} */}
        <View style={styles.section}>
          <TitleText style={styles.sectionTitle}>Gender</TitleText>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.radioRow}
              onPress={() => setSelectedGender("Male")}
            >
              <Fontisto
                name="radio-btn-active"
                size={20}
                color={selectedGender === "Male" ? COLORS.primary : "lightgray"}
              />
              <RegularText bold>Male</RegularText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioRow}
              onPress={() => setSelectedGender("Female")}
            >
              <Fontisto
                name="radio-btn-active"
                size={20}
                color={
                  selectedGender === "Female" ? COLORS.primary : "lightgray"
                }
              />
              <RegularText bold>Female</RegularText>
            </TouchableOpacity>
          </View>
        </View>

        {/* {/ Work Experience /} */}
        <View style={styles.section}>
          <TitleText style={styles.sectionTitle}>Work Experience (years)</TitleText>
          <View style={styles.workExperienceRow}>
            {workExperienceOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.workExperienceButton,
                  selectedExperience === option &&
                    styles.workExperienceButtonSelected,
                ]}
                onPress={() => setSelectedExperience(option)}
              >
                <Text
                  style={[
                    styles.workExperienceText,
                    selectedExperience === option &&
                      styles.workExperienceTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* {/ Price Range /} */}
        <View style={styles.section}>
          <TitleText style={styles.sectionTitle}>Price Range</TitleText>
          <View style={styles.row}>

          <RegularText bold>
            ${priceRange[0]}
          </RegularText>

          <RegularText bold>
            ${priceRange[1]}
          </RegularText>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={20}
            maximumValue={250}
            step={1}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor={COLORS.primary}
            onValueChange={(value) => setPriceRange([value, 250])} 
            
          />
        </View>

        {/* {/ Buttons /} */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.resetButton]}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.filterButton]}>
            <Text style={styles.filterButtonText}>Filter Now</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:30}}></View>
      </ScrollView>
    </MainLayout>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  workExperienceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  workExperienceButton: {
    backgroundColor: "#FFEBEE",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  workExperienceButtonSelected: {
    backgroundColor: "#4CAF50",
  },
  workExperienceText: {
    color: "#E53935",
    fontSize: 14,
    fontWeight: "bold",
  },
  workExperienceTextSelected: {
    color: "#FFFFFF",
  },
  priceRangeText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 35,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: "#FFEBEE",
  },
  resetButtonText: {
    color: "#E53935",
    fontSize: 16,
    fontWeight: "bold",
  },
  filterButton: {
    backgroundColor: "#4CAF50",
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
