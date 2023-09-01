import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { DateInputRange } from './dateInputRange';

describe('<DateInputRange />', () => {
  test('testing for label', () => {
    const { getByText } = render(<DateInputRange type="month" />);
    expect(getByText('start date')).toBeVisible();
    expect(getByText('end date')).toBeVisible();
  });
  test('testing for inputs', () => {
    const { container } = render(<DateInputRange type="month" />);
    expect(container.getElementsByClassName('input').length == 2).toBeTruthy();
  });

  test('test the imperative handler with empty inputs', () => {
    const ref = React.createRef();
    let dateRange;
    render(<DateInputRange type="month" ref={ref} />);
    act(() => {
      dateRange = ref.current.getDates();
    });
    expect(dateRange).not.toBeTruthy();
  });
});
