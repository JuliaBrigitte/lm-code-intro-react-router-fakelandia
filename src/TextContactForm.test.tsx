import { render, screen } from '@testing-library/react';
import TextContactForm from "./TextContactForm";


test('Text Contact Form label text', () => {
    const testText=""
    const myMockFn = jest.fn(cb => cb(null, true));
    render(<TextContactForm textContactForm={testText} triggerTextContactFormUpdate={myMockFn} checkDisabledSubmit={myMockFn}/>);
    const someText = screen.getByText("Text Contact Form:");
    expect(someText).toBeInTheDocument();
});