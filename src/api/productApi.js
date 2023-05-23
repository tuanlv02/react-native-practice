import {axiosClient} from './instance';

export const ProductApi = {
  getProducts: () => {
    return axiosClient.get('/products');
  },
};
