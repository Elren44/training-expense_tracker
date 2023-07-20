import React, {useContext, useLayoutEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import IconButton from "../components/ui/IconButton";
import {GlobalStyles} from "../constants/style";
import Button from "../components/ui/Button";
import {ExpensesContext} from "../store/expenses-context";

export const ManageExpense = ({route, navigation}) => {
	const expensesCtx = useContext(ExpensesContext)
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Редактирование" : "Добавить"
		})
	}, [navigation, isEditing])

	const deleteExpenseHandler = () => {
		expensesCtx.deleteExpense(editedExpenseId)
		navigation.goBack();
	}
	const cancelHandler = () => {
		navigation.goBack();
	}

	const confirmHandler = () => {
		if (isEditing) {
			expensesCtx.updateExpense(editedExpenseId, {description: "TEST!!!!", amount: 555, date: new Date('2023-07-20')})
		} else {
			expensesCtx.addExpense({description: "TEST", amount: 500, date: new Date('2023-07-19')})
		}
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<Button mode="flat" onPress={cancelHandler} style={styles.button}>Отмена</Button>
				<Button onPress={confirmHandler} style={styles.button}>{isEditing ? "Обновить" : "Добавить"}</Button>
			</View>
			{isEditing &&
				<View style={styles.deleteContainer}>
					<IconButton icon="trash" size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler}/>
				</View>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center"
	}
})
