import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import RnRangeSlider from 'rn-range-slider';
import {COLORS} from '../styles';

const Rail = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'lightgray',
        height: 5,
        borderRadius: 5,
      }}></View>
  );
};

const RailSelected = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: COLORS.primary,
        height: 6,
        borderRadius: 5,
      }}></View>
  );
};

const Thumb = () => {
  return (
    <View
      style={{
        width: 25,
        height: 25,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
      }}></View>
  );
};

const RangeSlider = ({
  values,
  onChange,
}: {
  values: [number, number];
  onChange: [any, any];
}) => {
  const [ageMin, ageMax] = values;
  const [setAgeMin, setAgeMax] = onChange;
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const handleValueChange = useCallback((low: any, high: any) => {
    setAgeMin(low);
    setAgeMax(high);
  }, []);

  return (
    <RnRangeSlider
      style={styles.slider}
      min={100}
      max={10000}
      step={2}
      low={ageMin}
      high={ageMax}
      floatingLabel
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      onValueChanged={handleValueChange}
    />
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 15,
    marginTop: 5,
  },
});
