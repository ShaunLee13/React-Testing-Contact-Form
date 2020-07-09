import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test('Checks that form components are showing', () => {
  const { getByText, container } = render(<ContactForm />)
  expect(getByText(/first name*/i))
  expect(getByText(/last/i))
  expect(getByText(/email/i))
  expect(getByText(/message/i))
  //Test's detecting Labels
  expect(container.querySelector('form'))
  //Test identifies form
  expect(screen.getByLabelText(/First Name*/i))
  expect(screen.getByLabelText(/last name/i))
  expect(screen.getByLabelText(/email*/i))
  expect(screen.getByLabelText(/message/i))
  expect(container.querySelector('input[type="submit"]'))
  //All form fields identified
});

test('Checks that form is working', () => {
    const {container } = render(<ContactForm />)
    const firstInput = screen.getByLabelText(/First Name*/i)
    const lastInput = screen.getByLabelText(/last name/i)
    const email = screen.getByLabelText(/email*/i)
    const message = screen.getByLabelText(/message/i)
    fireEvent.change(firstInput, { target: { value: 'Alex' } })
    fireEvent.change(lastInput, { target: { value: 'Jensen' } })
    fireEvent.change(email, { target: { value: 'alex@alex.com' } })
    fireEvent.change(message, { target: { value: 'My name is Alex' } })
    expect(firstInput).toHaveValue('Alex')
    expect(lastInput).toHaveValue('Jensen')
    expect(email).toHaveValue('alex@alex.com')
    expect(message).toHaveValue('My name is Alex')
    expect(firstInput).toBeValid()
    expect(lastInput).toBeValid()
    expect(email).toBeValid()
    expect(email).toHaveAttribute('type', 'email')
    expect(message).toBeValid()
    const submit = container.querySelector('input[type="submit"]')
    fireEvent.click(submit)
});
