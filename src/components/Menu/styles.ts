import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    content: {
        height: 300,
        width: '100%',
        backgroundColor: 'white'
    },
    title: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,
    }

})