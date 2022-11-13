import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../../../types';
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

const ProductItem = (props: Product) => {
	const { title, image, price, category } = props;
	const { colorScheme } = useColorScheme();

	const [quantity, setQuantity] = useState<number>(1);

	const onHandleQuantityMinus = () => {
		if (quantity === 1) return;
		setQuantity((prevQuantity) => prevQuantity - 1);
	};

	return (
		<View className="w-full my-5 bg-white dark:bg-slate-600 rounded-xl">
			<View className="py-2 dark:bg-white">
				<Image
					source={{ uri: image }}
					className="mx-auto w-44 aspect-square"
					style={{ resizeMode: 'contain' }}
				/>
			</View>
			<View className="p-5">
				<Text className="italic text-gray-500 dark:text-gray-200">
					{category}
				</Text>
				<View className="flex-row items-center justify-between">
					<Text className="w-3/5 font-semibold dark:text-white">{title}</Text>

					<Text className="text-xl font-bold dark:text-gray-300">
						${Math.round(price * quantity)}
					</Text>
				</View>
				<View className="flex-row gap-2 mt-1">
					<AntDesign
						name="minuscircle"
						size={30}
						color={colorScheme === 'dark' ? 'white' : 'black'}
						onPress={onHandleQuantityMinus}
					/>
					<Text className="text-xl font-bold dark:text-white">{quantity}</Text>
					<AntDesign
						name="pluscircle"
						size={30}
						color={colorScheme === 'dark' ? 'white' : 'black'}
						onPress={() => setQuantity((prevQuantity) => prevQuantity + 1)}
					/>
				</View>
			</View>

			<TouchableOpacity className="items-center py-2 mx-auto mb-5 bg-black rounded-full dark:bg-white w-44">
				<Text className="text-lg font-bold text-white dark:text-black">
					Buy Now!
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProductItem;
