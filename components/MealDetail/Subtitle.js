import { StyleSheet, Text, View } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor: "black",
        borderBottomWidth: 2,
      },
      subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
})
