import React from 'react';
import {Text} from 'react-native';

const ProductPage = ({navigation, route}) => {
  return <Text>Name: {route.params.name}</Text>;
};

export default ProductPage;
