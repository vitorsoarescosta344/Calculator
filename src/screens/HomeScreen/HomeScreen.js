import {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';
import Container from '../../layout/Container';

export default function HomeScreen() {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [operation, setOperation] = useState('');

  function onKeyboardPress(value) {
    if (firstValue === '0' && operation === '') {
      setFirstValue(value);
    } else if (firstValue !== '0' && operation === '') {
      setFirstValue(old => setFirstValue(old + value));
    } else if (secondValue === '0' && operation !== '') {
      setSecondValue(value);
    } else if (secondValue !== '0' && operation !== '') {
      setSecondValue(old => setSecondValue(old + value));
    }
  }

  function clearHandler() {
    setFirstValue('0');
    setSecondValue('0');
    setOperation('');
  }

  function resultHandler() {
    switch (operation) {
      case '+':
        setFirstValue(parseFloat(firstValue) + parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;
      case '-':
        setFirstValue(parseFloat(firstValue) - parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;
      case '*':
        setFirstValue(parseFloat(firstValue) * parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;
      case '/':
        setFirstValue(parseFloat(firstValue) / parseFloat(secondValue));
        setOperation('');
        setSecondValue('0');
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Container>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 35}}>
            {operation === '' ? firstValue : secondValue}
          </Text>
        </View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Button size={1} text={'C'} feature onPress={clearHandler} />
          <Button size={1} icon={'plus-minus-variant'} feature />
          <Button size={1} icon={'percent'} feature />
          <Button
            size={1}
            icon={'division'}
            operator
            onPress={() => setOperation('/')}
          />
          <Button size={1} text={'7'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'8'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'9'} onPress={text => onKeyboardPress(text)} />
          <Button
            size={1}
            icon={'multiplication'}
            operator
            onPress={() => setOperation('*')}
          />
          <Button size={1} text={'4'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'5'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'6'} onPress={text => onKeyboardPress(text)} />
          <Button
            size={1}
            icon={'minus'}
            operator
            onPress={() => setOperation('-')}
          />

          <Button size={1} text={'1'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'2'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'3'} onPress={text => onKeyboardPress(text)} />
          <Button
            size={1}
            icon={'plus'}
            operator
            onPress={() => setOperation('+')}
          />
          <Button size={2} text={'0'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} text={'.'} onPress={text => onKeyboardPress(text)} />
          <Button size={1} icon={'equal'} operator onPress={resultHandler} />
        </View>
      </Container>
    </>
  );
}
