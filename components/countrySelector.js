import useStats from '../utils/useStats';
import Stats from '../components/stats';
import { useState } from 'react';

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [selectedCountryCode, setSelectedCountryCode] = useState('USA');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div
      style={{
        marginTop: '16px',
      }}>
      <select
        onChange={(e) => {
          console.log(e);
          setSelectedCountry(e.target.value);
        }}>
        {Object.entries(countries.countries).map(([country, code]) => {
          return (
            <option
              selected={selectedCountry === countries.iso3[code]}
              key={country}
              value={countries.iso3[code]}>
              {country}
            </option>
          );
        })}
      </select>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
