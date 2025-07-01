import { type SQLiteDatabase } from "expo-sqlite";

const productNames: string[] = [
    "Apples",
    "Bananas",
    "Oranges",
    "Milk",
    "Bread",
    "Eggs",
    "Cheese",
    "Tomatoes",
    "Potatoes",
    "Chicken Breast",
    "Rice",
    "Pasta",
    "Coffee",
    "Tea",
    "Butter",
    "Yogurt",
    "Carrots",
    "Onions",
    "Cereal",
    "Juice",
    "Beef",
    "Fish",
    "Lettuce",
    "Spinach",
    "Broccoli",
    "Cauliflower",
    "Peppers",
    "Cucumbers",
    "Mushrooms",
    "Grapes",
    "Strawberries",
    "Blueberries",
    "Pineapple",
    "Watermelon",
    "Lemons",
    "Limes",
    "Avocado",
    "Peanut Butter",
    "Jam",
    "Honey",
    "Sugar",
    "Salt",
    "Pepper",
    "Olive Oil",
    "Vinegar",
    "Ketchup",
    "Mustard",
    "Mayonnaise",
    "Frozen Pizza",
    "Ice Cream",
    "Chips",
    "Chocolate"
];

export async function seed(database: SQLiteDatabase){
    await database.withTransactionAsync(async () => {
        for(const name of productNames){
            await database.runAsync("INSERT INTO products (name) VALUES (?);", [name])
        }
    })
}