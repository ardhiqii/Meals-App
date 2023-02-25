import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealsList";

function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIds = favoriteMealsCtx.ids
  const favoriteMeals = MEALS.filter(meal => mealIds.includes(meal.id))
  if(favoriteMeals.length === 0){
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }
  return <MealsList items={favoriteMeals} />
}
export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',

    }
})