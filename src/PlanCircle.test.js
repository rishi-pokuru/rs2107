import React from 'react';
import { render } from '@testing-library/react';
import PlanCircle from './PlanCircle';

describe('<PlanCircle />', () => {
  test('testing for element', () => {
    const { getByText, container } = render(<PlanCircle>testing</PlanCircle>);
    expect(getByText('testing')).toBeVisible();
    expect(
      container.getElementsByClassName('plan-type').length == 1
    ).toBeTruthy();
  });
  test('testing for mr', () => {
    const { getByText, container } = render(
      <PlanCircle num={2}>testing</PlanCircle>
    );
    expect(getByText('testing')).toBeVisible();
    expect(container.getElementsByClassName('mr-2').length == 1).toBeTruthy();
  });
});
