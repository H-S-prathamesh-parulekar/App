import React, {Component, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
// import {useState} from 'react';





export default class New1 extends Component {
    
  _onPressButton() {
    alert('You tapped the button!');
  }

  render() {
         const [selectedValue, setSelectedValue] = useState('java');
    return (

      <View style={styles.container}>
        <View>
          <Text>sub1</Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="AA" value="1" />
            <Picker.Item label="AB" value=".9" />
            <Picker.Item label="BB" value=".8" />
          </Picker>
        </View>
        <Button
          onPress={this._onPressButton}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  // buttonContainer: {
  //   margin: 20,
  // },
  // alternativeLayoutButtonContainer: {
  //   margin: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
});
