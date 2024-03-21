import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CounterApp from "../components/Counter/counter";

describe("Counter Component" , ()=>{
    it("Should render initial value given in props", ()=>{
       const {getByText} = render(<CounterApp initialValue={10} />);
       expect(getByText('Counter Value: 10')).toBeInTheDocument();
    })
});

it("Should increment the value when 'Increment button' is clicked", () => {
    const {getByText} = render(< CounterApp initialValue={10}/>);
    const incrementButton = getByText('Increment');
    const counterValue = getByText('Counter Value: 10');

    fireEvent.click(incrementButton);
    expect(getByText('Counter Value: 11')).toBeInTheDocument();
})

it("Should decrement the value when 'Decrement button' is clicked", ()=> {
    const {getByText} = render(<CounterApp initialValue={10}/>);
    const decrementButton = getByText('Decrement');
    const counterValue = getByText('Counter Value: 10');

    fireEvent.click(decrementButton);
    expect(getByText('Counter Value: 9')).toBeInTheDocument();

})