import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((item, i) => (
    <View key={i} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius:7,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor: '#f4c489',
    },
    itemText:{
        textAlign:'center'
    }
});
