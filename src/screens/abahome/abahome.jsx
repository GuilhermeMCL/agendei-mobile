import { FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import {  transportadora } from "../../constants/data.js";
import Doctor from "../../components/doctor/doctor.jsx";
import icon from "../../constants/icon.js";

function AbaHome() {
    return <View style={styles.container}>
        <Text style={styles.text}>Agende já sua coleta</Text>

        <FlatList data={transportadora}
            keyExtractor={(doc) => doc.id_transportadora}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Doctor name={item.name}
                    icon={item.icon == "P" ? icon.Princesa : icon.female}   
                    specialty={item.specialty} />
            }} />
    </View>
}

export default AbaHome;