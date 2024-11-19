import React, { useEffect, useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {

    return (
        <div className='nav-bar-container'>
            <div className='nav-bar-container-top nav-bar-section'>
                <div className='nav-top-left'>
                    <div className='nav-logo'>
                        logo
                    </div>
                    <div className='nav-name'>
                        airbnb
                    </div>
                </div>
                <div className='nav-top-middle'>
                    <div className='nav-stays'>
                        Stays
                    </div>
                    <div className='nav-experiences'>
                        Experiences
                    </div>
                </div>
                <div className='nav-top-right'>
                    <div className='airbnb-your-home'>
                        Airbnb your home
                    </div>
                    <div className='global'>
                        global icon
                    </div>
                    <div className='settings-container'>
                        <div className='settings-ham'>
                            ham
                        </div>
                        <div className='settings-prof-pic'>
                            profile picture
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bar-container-bottom nav-bar-section'>
                <div className='search-bar-container-expanded'>
                    <div className='search-location-container'>
                        <div className='where'>
                            Where
                        </div>
                        <div className='search-dest'>
                            Search Destinations
                        </div>
                    </div>
                    <div className='checkin-container'>
                        <div className='checkin'>
                            Check in
                        </div>
                        <div className='checkin-dates'>
                            Add dates
                        </div>
                    </div>
                    <div className='checkout-container'>
                        <div className='checkout'>
                            Check out
                        </div>
                        <div className='checkout-dates'>
                            Add dates
                        </div>
                    </div>
                    <div className='guests-container'>
                        <div className='who'>
                            Who
                        </div>
                        <div className='add-guests'>
                            Add guests
                        </div>
                    </div>
                    <div className='search-exp-search'>
                        <div className='search-circle'>
                            <div className='search-icon'>
                                search icon
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
