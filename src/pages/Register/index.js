import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
                        <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Digite seu e-mail' style={styles.input}/>
            <TextInput placeholder='Crie sua senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Criar conta</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Password'}}><Text style={styles.LinkBtn}>Esqueceu a senha? </Text></Link>
                <Link to={{screen: 'Login'}}><Text style={styles.LinkBtn}>Já tenho cadastro </Text> </Link>
            </View>
        </View>
    )
}