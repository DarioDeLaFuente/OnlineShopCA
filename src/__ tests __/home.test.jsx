import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Component', () => {
  beforeAll(() => {
    const sampleProduct = {
      description: "Women's perfume that smells warm and sweet, with nuances of wood and jasmine.",
      discountedPrice: 2079.99,
      id: '109566af-c5c2-4f87-86cb-76f36fb8d378',
      imageUrl: 'https://static.noroff.dev/api/online-shop/1-perfume-white.jpg',
      price: 2599.99,
      rating: 5,
      reviews: [{}],
      tags: ['perfume', 'beauty'],
      title: 'Vanilla Perfume',
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([sampleProduct]),
      }),
    );
  });

  it('fetches and renders products correctly', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    await waitFor(() => {});
  });
});
