import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput from './dateInput';

describe('<DateInput />', () => {
  test('testing for label', () => {
    const { getByText } = render(<DateInput label="test" />);
    expect(getByText(/test/)).toBeVisible();
  });
  test('testing for classname', () => {
    const { container } = render(<DateInput label="test" />);
    expect(container.getElementsByClassName('label').length > 0).toBeTruthy();
  });
  test('testing for id', () => {
    const { container } = render(<DateInput label="test" id="test" />);
    expect(container.getElementsByClassName('input').length > 0).toBeTruthy();
  });

  test('testing for value', () => {
    const date = new Date(2023, 11, 10);
    const { container } = render(
      <DateInput
        label="test"
        dateFormat="MM/yyyy"
        selectedDate={date}
        id="test"
      />
    );
    expect(container.querySelector('.input').value).toBe(
      Number(date.getMonth() + 1) + '/' + date.getFullYear()
    );
  });
  test('change trigger', () => {
    const date = new Date(2023, 11, 10);
    let events = [];
    const onChange = jest.fn();
    const { container } = render(
      <DateInput
        label="test"
        dateFormat="MM/yyyy"
        selectedDate={date}
        id="test"
        onDateChange={onChange}
      />
    );
    const input = container.querySelector('.input');
    fireEvent.change(input, { target: { value: '10/2023' } });
    expect(onChange).toHaveBeenCalled();
  });
});
