import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Products from '../pages/Products';
import fetchMock from 'jest-fetch-mock';

describe('Products Component', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('navigates to product details page when "View Details" button is clicked', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1, title: 'Product 1' }]));

    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>,
    );
    await screen.findByTestId('view-details-button');
    await waitFor(() => {});
    //console.log(screen.debug());
    const viewDetailsButton = screen.getByTestId('view-details-button');
    expect(viewDetailsButton).toBeInTheDocument();
    userEvent.click(viewDetailsButton);
  });
});
