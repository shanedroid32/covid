import styled from 'styled-components';

import Stats from '../components/stats';
import CountrySelector from '../components/countrySelector';
import Footer from '../components/footer';

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
      <Stats url='https://covid19.mathdro.id/api' />
      <CountrySelector />
      <Footer />
    </IndexBody>
  );
}
