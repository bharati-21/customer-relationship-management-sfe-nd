import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { listStyles } from "./styles";

const styles = listStyles();

const List = ({ data, onPressHandler, ListItemComponent }) => {
	const changeHandler = (selectedItem) => {
		onPressHandler(selectedItem);
	};

	const ListItem = ({ listItem }) => {
		return (
			<TouchableOpacity
				style={styles.item}
				onPress={() => changeHandler(listItem)}
			>
				<ListItemComponent listItem={listItem} />
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			contentContainerStyle={styles.listContainer}
			data={data}
			renderItem={({ item }) => <ListItem listItem={item} />}
			style={styles.list}
		/>
	);
};

export default List;
