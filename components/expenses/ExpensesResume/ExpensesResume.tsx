import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

import styles from "./ExpensesResume.styles";
import { ExpensesResumeProps as Props } from "./ExpensesResume.types";
import ExpensesPlaceholder from "../ExpensesPlaceholder/ExpensesPlaceholder";

import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Expenses } from "@/interfaces/expenses.types";
import { useFetchExpenses } from "@/services/finance.services.hooks";
import { getCategoriesKey } from "@/services/finance.services.hooks";

const ExpensesResume: React.FC<Props> = (props) => {
  const queryClient = useQueryClient();
  const { data: categories, isFetching } = useFetchExpenses();

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getCategoriesKey() });
  };

  const renderItem: ListRenderItem<Expenses> = (list) => {
    const { item: expense } = list;
    const { amount, description } = expense;
    return (
      <View style={styles.categoryContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.title}>Amount: {amount}</Text>
        </View>
        <View style={styles.rightContainer}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ExpensesTitle}>Your last expenses</Text>
      <View style={styles.flatlist}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          ListEmptyComponent={
            isFetching ? (
              <ExpensesPlaceholder />
            ) : (
              <EmptyState text="No categories found" onPress={onRefresh} />
            )
          }
        />
      </View>
    </View>
  );
};

ExpensesResume.defaultProps = {};

export default ExpensesResume;
