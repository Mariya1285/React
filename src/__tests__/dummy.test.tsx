import { render, screen } from '@testing-library/react'
import { Test } from '../trial';
import React from 'react';

it('works', async() => {
    render (<Test></Test>)
    const test_var = await screen.findByText('Test Component');
    expect(test_var).toBeTruthy();
})