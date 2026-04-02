import { Text, View } from "react-native";
import { styles } from "./styles";
import BottomSheet from "@gorhom/bottom-sheet"

export default function Menu() {
    return (
        <BottomSheet  
            index={0}
            snapPoints={[100, 230]}
        >
            <View style={styles.container}>
                <Text>
                    Comece a criar agora
                </Text>
            </View>
        </BottomSheet>
    )
}