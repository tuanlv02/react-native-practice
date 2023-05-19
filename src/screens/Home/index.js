import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.container}>
        <Text style={styles.title}>Trang chủ</Text>
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
