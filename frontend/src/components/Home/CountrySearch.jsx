// CountrySearch.js
import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';

const CountrySearch = ({ countryData, onSelectCountry }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    
  };

  const filteredCountries = countryData.filter(country =>
    country["Country and Area"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search Country"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && (
        <List>
          {filteredCountries.map(country => (
            <ListItem
              button
              key={country.CountryID}
              onClick={() => {
                setSearchTerm('');
                return(onSelectCountry(country));
              }}
            >
              <ListItemText primary={country["Country and Area"]} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CountrySearch;
