import {useState} from "react";

const ReasonForContact = ({reasonForContact, triggerReasonForContactUpdate, checkDisabledSubmit}: {reasonForContact: string, triggerReasonForContactUpdate: Function, checkDisabledSubmit: Function}) : JSX.Element =>
{
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>("");
    const validate = (value: string) =>
    {
        if (value === "select")
        {
            return "Please choose an option"
            checkDisabledSubmit(false)
        }
        else
        {
            checkDisabledSubmit(true)
        }
    }

    let reasonForContactText = {
        "select": "Please select an Option",
        "bored": "I just want to talk",
        "rudeness": "Mild Public Rudeness = 🤪",
        "lift": "Speaking in a Lift = 🗣",
        "vegetables": "Not Eating Your Vegetables = 🥗",
        "united": "Supporting Manchester United = 😈"};

    return (
        <div>
            <label htmlFor="reasonForContact">
                Reason for Contact:
            </label>

            <select id="reasonForContact" value={reasonForContact} name="reasonForContact"
                placeholder="select an option"
                onChange={(e) =>
                {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    triggerReasonForContactUpdate(e.target.value)
                }} >
                {Object.entries(reasonForContactText).map(([option, value]) => {
                    return (
                        <option key={option} value={option}>
                            {value}
                        </option>
                    );
                })}
            </select>
            <div className="error"><i>{errorMessage}</i> </div>

        </div>
    );
}



export default ReasonForContact;