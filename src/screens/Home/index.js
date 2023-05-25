import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.container}>
        <Text style={styles.title}>Trang chủ</Text>

        <Button
          title="Go to product page"
          onPress={() => {
            navigation.navigate('Product', {
              name: 'Lê Văn Tuân',
            });
          }}
        />

        <Button
          title="Deep link"
          onPress={() => {
            Linking.openURL(
              'momo://app?action=payWithApp&isScanQR=false&serviceType=app&sid=TU9NT3wwMTdkNDE3NS02MjQ2LTRjM2ItYWNjMy00NTQ3MjZhZTgyODI&v=2.3',
            );
          }}
        />

        <Button
          title="QR code"
          onPress={() => {
            Linking.openURL(
              'momo://app?action=payWithApp&isScanQR=true&serviceType=qr&sid=TU9NT3wwMTdkNDE3NS02MjQ2LTRjM2ItYWNjMy00NTQ3MjZhZTgyODI&v=2.3',
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default HomeScreen;
