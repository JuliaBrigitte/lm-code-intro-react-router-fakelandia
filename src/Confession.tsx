import { useState } from 'react';
import ReasonForContact from './ReasonForContact';
import Subject from './Subject';
import TextContactForm from './TextContactForm';
import {MisdemeanourEntry} from "./MisdemeanourEntry";


const Confession  = ({misdemeanorsList, misdemeanorsListUpdate}: {misdemeanorsList: Array<MisdemeanourEntry>, misdemeanorsListUpdate: Function}) => {

    const [subject, setSubject] = useState<string>("")
    const [reasonForContact, setReasonForContact] = useState<string>('')
    const [textContactForm, setTextContactForm] = useState<string>("")
    const [formSubmitted, setFormSubmitted] = useState<string>("not yet")

    const [subjectSubmitted, setSubjectSubmitted] = useState<string>("")
    const [reasonForContactSubmitted, setReasonForContactSubmitted] = useState<string>('')
    const [textContactFormSubmitted, setTextContactFormSubmitted] = useState<string>("")

    const [disabled, setDisabled] = useState<boolean>(true)

    function checkDisabledSubmit(validationOk: boolean)
    {
       setDisabled(validationOk)
    }

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmitted("now it is submitted")
        setSubjectSubmitted(subject)
        setReasonForContactSubmitted(reasonForContact)
        setTextContactFormSubmitted(textContactForm)
        console.log(reasonForContact);
        if ((reasonForContact !== "bored") && (reasonForContact !== "select") && (reasonForContact !== ""))
        {
            misdemeanorsListUpdate([...misdemeanorsList, {
                citizenId: 1,
                misdemeanour: reasonForContact,
                date: new Date().toLocaleDateString(),
            }])
        }

    };

    return (
        <section className='w12MForm'>
            <header>
                <p>
                    It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.
                </p>
                <p>
                    However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!
                </p>
            </header>
            <div className="row">
                <div className="column">
                    <p>Input Values Form</p>
                    <p>Subject: {subject}</p>
                    <p>Reason for Contact: {reasonForContact}</p>
                    <p>Text Contact Form: {textContactForm}</p>
                    <p className="submitted">Form submitted: {formSubmitted}</p>

                </div>

                <div className="column">

                    <p>Submitted Values</p>
                    <p className="submitted">Subject: {subjectSubmitted}</p>
                    <p className="submitted">Reason for Contact: {reasonForContactSubmitted}</p>
                    <p className="submitted">Text Contact Form: {textContactFormSubmitted}</p>
                    <p></p>

                </div>
            </div>

            <form>

                {/*Subject text input tag*/}
                <Subject subject={subject} triggerSubjectUpdate={setSubject} checkDisabledSubmit={checkDisabledSubmit}/>
                {/*Reason for Contact select tag*/}
                {/*A dropdown for the reason for the confession. This could be either a type of misdemeanour, or "I just want to talk"*/}
                <ReasonForContact reasonForContact={reasonForContact} triggerReasonForContactUpdate={setReasonForContact} checkDisabledSubmit={checkDisabledSubmit}/>
                {/*Text Contact Form textarea tag*/}
                <TextContactForm textContactForm={textContactForm} triggerTextContactFormUpdate={setTextContactForm} checkDisabledSubmit={checkDisabledSubmit}/>
                <input type="submit" disabled={disabled} value="Confess" onClick={(event) => handleSubmit(event)} />
            </form>
        </section>
    );
};


export default Confession;
