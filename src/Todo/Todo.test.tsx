import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from './Todo'; // Adjust the import path according to your directory structure

describe('Todo component', () => {
    test('should add a todo when Add Todo button is clicked', () => {
        render(<Todo />);

        const inputElement = screen.getByRole('textbox');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButton);

        const todoItem = screen.getByText('New Todo Item');
        expect(todoItem).toBeInTheDocument();
    });

    test('should clear input value after adding a todo', () => {
        render(<Todo />);

        const inputElement = screen.getByRole('textbox');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButton);

        expect(inputElement).toHaveValue('');
    });

    test('should delete a todo when delete button is clicked', () => {
        render(<Todo />);

        const inputElement = screen.getByRole('textbox');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByText('delete');
        fireEvent.click(deleteButton);

        const deletedTodo = screen.queryByText('New Todo Item');
        expect(deletedTodo).not.toBeInTheDocument();
    });
});
