import React from "react";

import styles from "./Expenses.styles";
import { ExpensesProps as Props } from "./Expenses.types";

import { useDeleteExpense } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";
import { Text, TouchableOpacity, View } from "react-native";

const Expenses: React.FC<Props> = (props) => {
  const { expenses } = props;
  const { amount, description, category, id } = expenses;
  const deleteMutation = useDeleteExpense();
  const { mutateAsync: deleteExpense, reset: resetDelete } = deleteMutation;

  const setExpenseModalConfig = useFinanceStore(
    (state) => state.setExpenseModalConfig
  );

  const deleteCategoryHandler = async () => {
    try {
      await deleteExpense({ id });
      resetDelete();
    } catch (e) {
      console.warn(e);
    }
  };

  const editCategoryHandler = async () => {
    setExpenseModalConfig({ visible: true, mode: "update", expense: expenses });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{description}</Text>
        <View style={styles.descriptionInformation}>
          <Text style={styles.amount}>Amount: {amount}</Text>
          <Text style={styles.category}>Category: {category}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button} onPress={editCategoryHandler}>
          Edit
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteCategoryHandler}>
          Delete
        </TouchableOpacity>
      </View>
    </View>
  );
};

Expenses.defaultProps = {};

export default Expenses;
