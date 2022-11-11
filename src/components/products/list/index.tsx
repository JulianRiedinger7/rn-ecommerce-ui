import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	ListRenderItem,
	View,
} from 'react-native';
import { Product } from '../../../../types';
import useProductsFetch from '../../../hooks/useProductsFetch';
import ProductItem from '../item';

const ProductsList = () => {
	const { products, loading } = useProductsFetch();

	const renderItem: ListRenderItem<Product> = ({ item }) => (
		<ProductItem {...item} />
	);

	return (
		<View>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<FlatList
					data={products}
					keyExtractor={(product) => product.id.toString()}
					renderItem={renderItem}
				/>
			)}
		</View>
	);
};

export default ProductsList;
