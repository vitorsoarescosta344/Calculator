import {View} from 'react-native';
import Button from '../../components/Button';
import Container from '../../layout/Container';

export default function HomeScreen() {
  return (
    <>
      <Container>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Button size={1} text={'C'} />
          <Button size={1} icon={'plus-minus-variant'} />
          <Button size={1} icon={'percent'} />
          <Button size={1} icon={'division'} operator />
          <Button size={1} text={'7'} />
          <Button size={1} text={'8'} />
          <Button size={1} text={'9'} />
          <Button size={1} icon={'multiplication'} operator />
          <Button size={1} text={'4'} />
          <Button size={1} text={'5'} />
          <Button size={1} text={'6'} />
          <Button size={1} icon={'minus'} operator />
          <Button size={1} text={'1'} />
          <Button size={1} text={'2'} />
          <Button size={1} text={'3'} />
          <Button size={1} icon={'plus'} operator />
          <Button size={2} text={'0'} />
          <Button size={1} text={'.'} />
          <Button size={1} icon={'equal'} operator />
        </View>
      </Container>
    </>
  );
}
