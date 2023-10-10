import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function ForgotPasswordPage(){
    return (
        <View style={styles.container}> 
                <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput 
                placeholder='Email' 
                style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>
                    Recuperar Senha
                </Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Register'}}>
                    <Text style={styles.LinkBtn}>Cadastre-se</Text>
                </Link>
                <Link to={{screen: 'Login'}}>
                    <Text style={styles.LinkBtn}>Voltar para o Login</Text>
                    </Link>
            </View>
        </View>
    )
}