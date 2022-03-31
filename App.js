import React, {useState} from 'react';
import { Text, ScrollView, TextInput, Button, Picker } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import Header from './components/Header'
import styles from './style/style'



export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [alcohol, setAlcohol] = useState(0);
  const genders = [{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}];


  function calculate () {

    let result = 0;
    let gramsInitial = bottles * 0.33 * 8 * 4.5;
    let burning = weight / 10;
    let gramsCurrent = gramsInitial - burning * time;

  

    if (weight <= 0) {
      window.alert("Set weight");
    }
    else if (gender === 'male') {
      result = gramsCurrent / (weight * 0.7);
    }
    else {
      result = gramsCurrent / (weight * 0.6);
    }

    if (result <= 0 ) {
      setAlcohol(0);
    } else {
    setAlcohol(result);
    
    }
    
  }
 
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Text style={styles.info}>Weight</Text>
        <TextInput onChangeText={text => setWeight(text)} keyboardType='numeric'/>
        <Text style={styles.info}>Bottles</Text>
        <Picker selectedValue={bottles} onValueChange={(itemValue, itemIndex) => setBottles(itemValue)}>
          <Picker.Item label="1" value={1}/>
          <Picker.Item label="2" value={2}/>
          <Picker.Item label="3" value={3}/>
          <Picker.Item label="4" value={4}/>
          <Picker.Item label="5" value={5}/>
          <Picker.Item label="6" value={6}/>
          <Picker.Item label="7" value={7}/>
          <Picker.Item label="8" value={8}/>
          <Picker.Item label="9" value={9}/>
          <Picker.Item label="10" value={10}/>
          <Picker.Item label="11" value={11}/>
          <Picker.Item label="12" value={12}/>
        </Picker>
        <Text style={styles.info}>Hours</Text>
        <Picker selectedValue={time} onValueChange={(itemValue, itemIndex) => setTime(itemValue)}>
          <Picker.Item label="1" value={1}/>
          <Picker.Item label="2" value={2}/>
          <Picker.Item label="3" value={3}/>
          <Picker.Item label="4" value={4}/>
          <Picker.Item label="5" value={5}/>
          <Picker.Item label="6" value={6}/>
          <Picker.Item label="7" value={7}/>
          <Picker.Item label="8" value={8}/>
          <Picker.Item label="9" value={9}/>
          <Picker.Item label="10" value={10}/>
          <Picker.Item label="11" value={11}/>
          <Picker.Item label="12" value={12}/>
        </Picker>
        <Text style={styles.info}>Gender</Text>
        <RadioForm selectedButtonColor={'#000000'} buttonColor={'#000000'} radio_props={genders} initial={0} onPress={(value) => {setGender(value)}}/>
        <Text style={styles.result}> {alcohol.toFixed(2)} </Text>
        <Button title="Calculate"  onPress={calculate}/>
        

    </ScrollView>
  );
}

