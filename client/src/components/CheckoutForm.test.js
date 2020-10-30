import React from "react";
import { render, getByAltText, getAllByTestId, getByText, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/First Name*/i);
    const lastnameInput = screen.getByLabelText(/Last Name*/i);
    const addressInput = screen.getByLabelText(/Address*/i);
    const cityInput = screen.getByLabelText(/City*/i);
    const stateInput = screen.getByLabelText(/State*/i);
    const zipInput = screen.getByLabelText(/State*/i);


    // events with React testing library -- fireEvent
    fireEvent.change(firstNameInput, { target: {value: 'Erick'} });
    fireEvent.change(lastnameInput, { target: {value: 'Gonzalez'} });
    fireEvent.change(addressInput, { target: {value: '123 Main St'} });
    fireEvent.change(cityInput, { target: {value: 'Randomcity'} });
    fireEvent.change(stateInput, { target: {value: 'CA'} });
    fireEvent.change(zipInput, { target: {value: '12345'} });
    
    // click submit button
    const submitButton = screen.getAllByTestId(/checkout/i);
    fireEvent.click(submitButton); // clicks the button we've defined
    const successMessage = screen.getAllByTestId(/success/i);

    
});
