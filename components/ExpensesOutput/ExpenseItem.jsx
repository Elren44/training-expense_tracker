import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {GlobalStyles} from "../../constants/style";
import {getFormattedDate} from "../../util/date";
import {useNavigation} from "@react-navigation/native";

const ExpenseItem = ({description, amount, date, id}) => {
	const navigation = useNavigation();
	const expensePressHandler = () => {
		navigation.navigate("ManageExpense", {
			expenseId: id
		})
	}

	return (
		<Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed}>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
					<Text style={styles.textBase}>{getFormattedDate(date)}</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.amountText}>{amount.toFixed(2)}р.</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default ExpenseItem;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.75
	},
	expenseItem: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: GlobalStyles.colors.primary500,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 6,
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 0.4
	},
	textBase: {
		color: GlobalStyles.colors.primary50
	},
	descriptionText: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: "bold"
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		minWidth: 80
	},
	amountText: {
		color: GlobalStyles.colors.primary500,
		fontWeight: "bold"
	}
})
