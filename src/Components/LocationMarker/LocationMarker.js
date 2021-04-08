import { Icon } from '@iconify/react';
import coffeeIcon from '@iconify/icons-mdi/coffee';
import React from 'react';

const LocationMarker = ( { lat, lng, onClick }) => {
    return (
        <div className="marker" onClick={onClick}>
            <Icon icon={coffeeIcon} color="rgb(139, 31, 31)" className="coffeeIcon" fontSize="2rem"/>
        </div>
    )
}

export default LocationMarker