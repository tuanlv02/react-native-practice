import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProductApi} from '../../api/productApi';

const ProductPage = ({navigation, route}) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getDataProducts();
  }, []);

  const getDataProducts = async () => {
    const data = await ProductApi.getProducts();
    setProducts(data);
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);

              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
          />
        }>
        <Text>Name: {route.params.name}</Text>
        {products?.map(item => {
          return (
            <View key={item.id}>
              <Text>Name: {item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ProductPage;
