import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";

const ITEMS_PER_PAGE = 10;

export function Home() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const database = useSQLiteContext()
    
    async function loadProducts() {
        if(isLoading) return
        
        try{
            setIsLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            const result = await database.getAllAsync<Product>(`
                SELECT id, name FROM products LIMIT ? OFFSET ?   
            `, [ITEMS_PER_PAGE, products.length]);

            if(result.length === 0) {
                setHasMore(false)
                return
            }

            setProducts(prev => {
                const existingIds = new Set(prev.map(p => p.id))
                const newItems = result.filter(p => !existingIds.has(p.id))

                return [...prev, ...newItems]
            }
        )
        } catch (error) {
            console.error("Error loading products")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return(
        <View style={{flex: 1}}>
            <FlatList 
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Card product={item} />}
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 62, gap: 16 }}
                // when will start loading more items
                // 20% to end of list
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if(!isLoading && hasMore) {
                        loadProducts()
                    }
                }}
                ListFooterComponent={() => isLoading ? <Loading /> : null}
            />
        </View>
    )
}