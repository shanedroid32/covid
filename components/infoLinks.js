import styled from 'styled-components';
import format from 'date-fns/format';
import Link from 'next/link';

const InfoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 32px;
  margin-bottom: 8px;
`;

export default function InfoLinks() {
  return (
    <div
      style={{
        marginTop: '32px',
        textAlign: 'center',
      }}>
      <p>
        Keeping yourself educated and informed about this pandemic is not only a
        good practice for your own safety but it is also your responsibility to
        understand how you might help prevent the spread of this deadly virus to
        those around you. Please visit the websites below for more information
        about COVID-19.
      </p>
      <InfoContent>
        <a href='https://hub.jhu.edu/novel-coronavirus-information/'>
          <img
            src='/images/john-hopkins-logo.jpg'
            alt="John Hopkin's University Logo"
          />
        </a>
        <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'>
          <img
            src='/images/cdc-logo.jpg'
            alt='Centers for Disease Control and Prevention Logo'
          />
        </a>
        <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>
          <img
            src='/images/world-health-logo.jpg'
            alt='World Health Organization Logo'
          />
        </a>
        <a href='https://www.nih.gov/health-information/coronavirus'>
          <img
            src='/images/nih-logo.jpg'
            alt='National Institutes of Health Logo'
          />
        </a>
      </InfoContent>
    </div>
  );
}
