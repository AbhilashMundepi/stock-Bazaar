import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from '../home/Hero'
import { expect } from 'vitest'

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />)
    const heroImage = screen.getByAltText("Hero image")
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","Media/images/homeHero.png");
  })

  test('renders heading and paragraph', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /invest in everything/i })).toBeInTheDocument()
    expect(screen.getByText(/Online plateform to invest/i)).toBeInTheDocument();
  });

  test('renders and clicks signup button', async () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /signup now/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(button).toBeEnabled()
  })

  test('button has correct inline style', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /signup now/i })
    expect(button.style.width).toBe('20%')
  })
})
