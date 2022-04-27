import { render, screen } from '@testing-library/react';
import Subject from "./Subject";


test('test subject Name label text', () => {
    const testText="Confession Time"
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<Subject subject={testText} triggerSubjectUpdate={myMockFn} checkDisabledSubmit={myMockFn}/>);
    const someText = screen.getByText("Subject:");
    expect(someText).toBeInTheDocument();
});