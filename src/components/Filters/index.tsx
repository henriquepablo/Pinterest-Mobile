import { FlatList } from "react-native"

import { FilterProps } from "./filters"
import Filter from "../Filter"

import { styles } from "./styles"

export function Filters({filter, filters, onChange}: FilterProps) {
    return (
        <FlatList
            data={filters}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
                <Filter
                    filter={item}
                    selected={item === filter}
                    onPress={() => onChange(item)}
                />
            )}
            horizontal
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
        />
    )
}