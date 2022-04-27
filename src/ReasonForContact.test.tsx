import { render, screen } from '@testing-library/react';
import ReasonForContact from "./ReasonForContact";


test('Does Reason for Contact show', () => {
    const testText="Reason for Contact:"
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<ReasonForContact reasonForContact={testText} triggerReasonForContactUpdate={myMockFn} checkDisabledSubmit={myMockFn}/>);
    const someText = screen.getByText('Reason for Contact:');
    expect(someText).toBeInTheDocument();
});

test('test a select option', () => {
    const testText="bored"
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<ReasonForContact reasonForContact={testText} triggerReasonForContactUpdate={myMockFn} checkDisabledSubmit={myMockFn}/>);
    expect(screen.getByLabelText('Reason for Contact:')).toHaveValue(testText);
});