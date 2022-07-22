import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/card";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const onChangeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={onChangeFilterHandler} />

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default ExpensesList;
