import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

const paths = ['/', '/products', '/product/details', '/cart', '/login', '/register', '/shipping', '/profile', '/address/new', '/profile/update', '/password/update', '/me/orders', '/product/new', '/admin/products', '/admin/upload_images', '/admin/orders', '/admin/order/update', '/admin/users', '/admin/user/update'];

describe('component showcase routes', () => {
  it.each(paths)('renders the page at %s', path => {
    const { container } = render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
    expect(container.querySelector('form, article, section, h1, h2')).not.toBeNull();
  });
  it('navigates from the component list to the login form', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    fireEvent.click(screen.getByRole('link', { name: 'Login' }));
    expect(screen.getByPlaceholderText(/email/i)).not.toBeNull();
  });
});
