import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Register from './src/pages/Register'
import Login from './src/pages/Login';
import Password from './src/pages/Password';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    />
                <Stack.Screen
                    name='Password'
                    component={Password}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282828",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: '20px'
    },
});
