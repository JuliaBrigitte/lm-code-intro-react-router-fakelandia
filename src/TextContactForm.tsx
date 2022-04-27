import {useState} from "react";

const TextContactForm = ({textContactForm, triggerTextContactFormUpdate, checkDisabledSubmit}: {textContactForm: string, triggerTextContactFormUpdate: Function, checkDisabledSubmit: Function})  =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
        //Text Contact Form: Must be between 10 and 153 characters.
        if ((value.length < 10) ||  (value.length > 153))
        {
            checkDisabledSubmit(true)
            return "Text must be between 10 and 153 characters"
        }
        checkDisabledSubmit(false)
        return ""

    }

    return (
        <div>
            <label>
                Text Contact Form:
            </label>
            <textarea value={textContactForm} name="textContactForm" onChange={(e) =>
            {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                triggerTextContactFormUpdate(e.target.value)
            }} />
            <div className="error"><i>{errorMessage}</i> </div>
        </div>
    );
}


export default TextContactForm;