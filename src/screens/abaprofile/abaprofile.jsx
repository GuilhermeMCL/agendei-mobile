import { Text, View } from "react-native";
import { styles } from "./abaprofile.style.js";

function AbaProfile() {
    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Guilhermezika</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>princesa@teste.com.br</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>Cnpj</Text>
            <Text style={styles.text}>00101320000138</Text>
        </View>
    </View>
}

export default AbaProfile;