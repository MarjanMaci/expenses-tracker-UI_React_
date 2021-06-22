import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    const submitDataHandler = (enteredData) => {
        const expenseData={
            id: Math.random().toString(),
            ...enteredData
        }
        props.onSaveExpenseData(expenseData)
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {
                !isEditing && 
                <button onClick={startEditingHandler}>Add New Expense</button>
            }
            {
                isEditing &&
                <ExpenseForm onSubmitData={submitDataHandler} onCancel={stopEditingHandler}/>
            }
        </div>
    );
}

export default NewExpense;