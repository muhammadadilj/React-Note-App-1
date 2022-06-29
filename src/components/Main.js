import React from 'react';

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark": ""}>
            <h1 className="main--title">Fun facts about React </h1>
            <ul className="main--facts">
                <li>Was first realease 2020</li>
                <li>Was 2nd realased</li>
                <li>Felt good</li>
                <li>Most liking</li>
                <li>Powers of Applications</li>
            </ul>
            
        </main>
    )
}
