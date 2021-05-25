import { Icon, InlineIcon } from '@iconify/react';
import React from 'react';
import baselineWaterDrop from '@iconify-icons/ic/baseline-water-drop';


const LocationMarker = ( { lat, lng, onClick }) => {
    return (
        <div className="marker" onClick={onClick}>
            <Icon icon={baselineWaterDrop} color="rgb(18, 21, 56)" className="water-icon" fontSize="2rem"/>
        </div>
    )
}

export default LocationMarker