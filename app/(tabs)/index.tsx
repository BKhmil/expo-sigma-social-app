import { useAuth } from '@clerk/clerk-expo';
import { Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
	const { signOut } = useAuth();
	return (
		<View>
			<TouchableOpacity onPress={() => signOut()}>
				<Text>logout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
