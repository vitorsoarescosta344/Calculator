import {Icon} from '@rneui/themed';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

export default function Button({size, icon, operator, text}) {
  const width = Dimensions.get('screen').width / 4;

  return (
    <>
      <TouchableOpacity
        style={{
          width: width * size,
          height: width,
          backgroundColor: operator ? 'orange' : 'gray',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon !== undefined && (
          <Icon type="material-community" size={35} name={icon} />
        )}
        {text !== undefined && <Text style={{fontSize: 35}}>{text}</Text>}
      </TouchableOpacity>
    </>
  );
}
