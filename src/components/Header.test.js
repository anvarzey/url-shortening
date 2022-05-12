import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders the button and dropdown menu', () => {
  render (<Header />)
   screen.getByLabelText('open menu')
   screen.getByLabelText('dropdown menu')
  })

