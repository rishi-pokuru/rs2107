import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RecentReports from './recentReports';

describe('<DateInput />', () => {
  test('testing for heading without params', () => {
    const { getByText } = render(<RecentReports />);
    expect(getByText(/Recently Viewed Reports/)).toBeVisible();
  });

  test('testing for report name', async () => {
    const { container, getByText } = render(<RecentReports label={['5740']} />);
    await waitFor(() => {
      expect(getByText(/Deferrals/)).toBeVisible();
    });
  });
});
