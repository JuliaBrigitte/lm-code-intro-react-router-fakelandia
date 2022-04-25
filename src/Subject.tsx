import {useState} from "react";

const Subject = ({subject, triggerSubjectUpdate, checkDisabledSubmit}: {subject: string, triggerSubjectUpdate: Function, checkDisabledSubmit: Function}) : JSX.Element =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
        //Subject: Must be between 7 and 49 characters. Numbers are allowed, but no special characters.
        if ((value.length < 7) ||  (value.length > 49))
        {
            return "Subject must be between 7 and 49 characters"
            checkDisabledSubmit(false)
        }
        if (! (/^[A-Za-z0-9 ]*$/.test(value)) )
        {
            return "Numbers are allowed, but no special characters"
            checkDisabledSubmit(false)
        }
        checkDisabledSubmit(true)
        return ""
    }

    return (
        <div>
            <label>
                Subject:
            </label>
            <input type="text" value={subject} name="subject" onChange={(e) =>
            {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                triggerSubjectUpdate(e.target.value)
            }} />
            <div className="error"><i>{errorMessage}</i> </div>
        </div>
    );

}

export default Subject;