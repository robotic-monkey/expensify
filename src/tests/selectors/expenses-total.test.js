import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('should add up single expense', () => {
  const singleExpense = [{ amount: 144 }];
  const result = selectExpensesTotal(singleExpense);
  expect(result).toEqual(singleExpense[0].amount);
});

test('should add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
