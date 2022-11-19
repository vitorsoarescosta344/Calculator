import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Container({children}) {
  return (
    <>
      <SafeAreaProvider style={{flex: 1}}>{children}</SafeAreaProvider>
    </>
  );
}
