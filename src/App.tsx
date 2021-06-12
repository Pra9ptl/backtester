import React from 'react';
import './App.css';
import CustomAutoComplete from './components/CustomAutoComplete';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BusinessIcon from '@material-ui/icons/Business';

function App() {

    const movies = [
        { title: 'Bacon' },
        { title: 'Fish' },
        { title: 'Sandwhich' },
        { title: 'Burger' },
        { title: 'Burrito' },
    ];

    return (
        <div className="App">
            <CustomAutoComplete
                options={movies}
                label="Food"
                icon={
                    <FastfoodIcon
                        color="primary"
                        fontSize="large"
                        style={{ marginRight: '8px' }}
                    />
                }
            />
            <CustomAutoComplete
                options={movies}
                label="Cars"
                icon={
                    <DriveEtaIcon
                        color="secondary"
                        fontSize="large"
                        style={{ marginRight: '8px' }}
                    />
                }
            />
            <CustomAutoComplete
                options={movies}
                label="Company"
                icon={
                    <BusinessIcon
                        color="action"
                        fontSize="large"
                        style={{ marginRight: '8px' }}
                    />
                }
            />
        </div>
    );
}

export default App;