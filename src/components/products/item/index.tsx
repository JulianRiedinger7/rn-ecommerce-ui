import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../../../types';

const ProductItem = (props: Product) => {
	const { title, description, image, price, category } = props;

	return (
		<View className="w-full bg-white dark:bg-slate-600 my-5 rounded-xl">
			<View className="dark:bg-white py-2">
				<Image
					source={{ uri: image }}
					className="w-44 aspect-square mx-auto"
					style={{ resizeMode: 'contain' }}
				/>
			</View>
			<View className="p-5">
				<Text className="italic text-gray-500 dark:text-gray-200">
					{category}
				</Text>
				<View className="flex-row justify-between items-center">
					<Text className="font-semibold dark:text-white w-3/5">{title}</Text>
					<Text className="font-bold dark:text-gray-300 text-lg">${price}</Text>
				</View>
			</View>

			<TouchableOpacity className="bg-black dark:bg-white items-center w-44 mx-auto mb-5 py-2 rounded-full">
				<Text className="text-white dark:text-black font-bold text-lg">
					Buy Now!
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProductItem;
