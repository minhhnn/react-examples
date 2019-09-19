import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        name: "summer",
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winder: {
        name: "winter",
        text: "Burr, It's chilly!",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if ((month > 2) && (month < 9)) {
        return lat > 0 ? seasonConfig.summer : seasonConfig.winder;
    } else {
        return lat > 0 ? seasonConfig.winter : seasonConfig.summer;
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, (new Date()).getMonth());
    return (
        <div className={`season-display ${season.name}`}>
            <i className={`icon-left massive ${season.iconName} icon`}></i>
            <h1>{season.text}</h1>
            <i className={`icon-right massive ${season.iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;