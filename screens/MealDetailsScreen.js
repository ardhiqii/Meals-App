import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId
    const displayMealDetail = MEALS.find((meal) =>meal.id === mealId )
    const data ={
      ingredients: displayMealDetail.ingredients
    }
  return (
    <MealDetails {...data}/>
  );
}

export default MealDetailsScreen;
