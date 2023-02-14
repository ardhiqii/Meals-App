import { FlatList, Pressable, Text, View } from "react-native"

function MealDetails({ingredients}){
    return <View>
        <Pressable>
            <Text>Meal Detail</Text>
            <FlatList data={ingredients} renderItem={(itemData)=><View>
                <Text>{itemData.item}</Text>
            </View>} />
        </Pressable>
    </View>
}

export default MealDetails