import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses
