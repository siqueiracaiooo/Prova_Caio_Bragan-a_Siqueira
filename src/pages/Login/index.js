import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='E-mail' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.Txto}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Password'}}><Text style={styles.LinkBtn}>Esqueceu a senha? </Text></Link>
                <Link to={{screen: 'Register'}}><Text style={styles.LinkBtn}>Cadastre-se </Text> </Link>
            </View>
        </View>
    )
}