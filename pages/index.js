import styled from 'styled-components';
import format from 'date-fns/format';

import Stats from '../components/stats';
import CountrySelector from '../components/countrySelector';

const IndexBody = styled.div`
  padding: 32px;
  font-family: 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial',
    'sans-serif';
  font-size: 18px;
`;

export default function IndexPage() {
  return (
    <IndexBody>
      <h1>🦠 COVID-19 Statistics</h1>
      <p>
        Last Updated{' '}
        {format(
          new Date('2020-03-15T02:33:03.000Z'),
          'MM/dd/yyyy @ hh:mm:ss a'
        )}
      </p>
      <Stats url='https://covid19.mathdro.id/api' />
      <CountrySelector />
    </IndexBody>
  );
}
