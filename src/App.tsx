import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';
import { ProductsList } from './components';

export default function App() {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<View className="flex-1 bg-slate-200 dark:bg-slate-800 py-20 px-4">
			<View className="flex-row items-center justify-between ">
				<Text className="font-bold text-lg dark:text-white">
					JR<Text className="font-extralight">commerce</Text>
				</Text>
				<Switch
					value={colorScheme === 'dark'}
					onValueChange={toggleColorScheme}
				/>
			</View>
			<ProductsList />
			<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
		</View>
	);
}
