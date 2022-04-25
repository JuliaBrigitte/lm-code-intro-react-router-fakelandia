import { ChangeEvent, useState } from "react";

interface MisdemeanourEntry {
    citizenId: number;
    misdemeanour: "rudeness" | "vegetables" | "lift" | "united";
    date: string;
}

// 👉 Add sub-components to the Misdemeanours page to render all of the misdemeanours in a list
// 👉 Add a dropdown to the Misdemeanours column that filters the visible list to just one of the four misdemeanours.
// ❗ This filter shouldn't update the list stored in state - just the list being rendered on this page, so you might need to separate out those two concepts somehow.



const Misdemeanour  = ({myMisdemeanorsList} : {myMisdemeanorsList: Array<MisdemeanourEntry>}) => {
    const [misdemeanourSelector, setMisdemeanourSelector] = useState("all");

    function changeVisibility(event: ChangeEvent<HTMLSelectElement>)
    {
        event.preventDefault();
        setMisdemeanourSelector(event.target.value);
    }

    let misdemeanourText = {
        "all": "all",
        "rudeness": "Mild Public Rudeness = 🤪",
        "lift": "Speaking in a Lift = 🗣",
        "vegetables": "Not Eating Your Vegetables = 🥗",
        "united": "Supporting Manchester United = 😈"};

    const showEntries = (misdemeanourSelector: String) =>
    {
        if ("all" == misdemeanourSelector)
        {
            return myMisdemeanorsList.map((item, index) => (
                    <tr>
                        <td>{item.citizenId}</td>
                        <td>{item.date}</td>
                        <td>{misdemeanourText[item.misdemeanour]}</td>
                        <td><img alt={"punishment for " + item.misdemeanour} src={'https://picsum.photos/id/' + item.citizenId%1025 + '/140/70/'}/></td>
                    </tr>
                )
            )
        }
        else
        {
            return myMisdemeanorsList.filter(itemAll => (misdemeanourSelector === itemAll.misdemeanour)).map((item, index) => (
                    <tr>
                        <td>{item.citizenId}</td>
                        <td>{item.date}</td>
                        <td>{misdemeanourText[item.misdemeanour]}</td>
                        <td><img alt={"punishment for " + item.misdemeanour} src={'https://picsum.photos/id/' + item.citizenId%1025 + '/140/70/'}/></td>
                    </tr>
                ));
        }

    }

    return (
        <>
            <table className="center">
                <thead>
                <th>Citizen ID (anonymised)</th>
                <th>Date</th>
                <th>Misdemeanour</th>
                <th>Punishment idea</th>
                </thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td><select
                        id="selectorMisdemeanour"
                        onChange={(e) => changeVisibility(e)}
                        placeholder="select an option"
                    >
                        {Object.entries(misdemeanourText).map(([option, value]) => {
                            return (
                                <option key={option} value={option}>
                                    {value}
                                </option>
                            );
                        })}
                    </select></td>
                    <td></td>
                </tr>
                {showEntries(misdemeanourSelector)}
            </table>
        </>
)
}


export default Misdemeanour;
