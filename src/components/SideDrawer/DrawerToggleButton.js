import React from 'react';

import './DrawerToggleButton.css';

const DrawerBtn = props => (
    <button className="toggle-button">
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default DrawerBtn;