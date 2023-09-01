import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

describe('<Header />', () => {
  test('testing for size', () => {
    const { getByText, container } = render(<Header size="2">testing</Header>);
    expect(getByText('testing')).toBeVisible();
    expect(
      container.getElementsByClassName('is-size-2').length == 1
    ).toBeTruthy();
  });
  test('testing for alignment', () => {
    const { getByText, container } = render(
      <Header align="right">testing</Header>
    );
    expect(getByText('testing')).toBeVisible();
    expect(
      container.getElementsByClassName('has-text-right').length == 1
    ).toBeTruthy();
  });

  test('testing for color', () => {
    const { getByText, container } = render(
      <Header color="success">testing</Header>
    );
    expect(getByText('testing')).toBeVisible();
    expect(
      container.getElementsByClassName('has-text-success').length == 1
    ).toBeTruthy();
  });

  test('testing for color', () => {
    const { getByText, container } = render(
      <Header font="monospace">testing</Header>
    );
    expect(getByText('testing')).toBeVisible();
    expect(
      container.getElementsByClassName('is-family-monospace').length == 1
    ).toBeTruthy();
  });
});
