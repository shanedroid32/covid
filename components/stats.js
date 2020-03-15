import useStats from '../utils/useStats';
import styled from 'styled-components';
import format from 'date-fns/format';

const StatBlockConfirmed = styled.div`
  background: rgb(255, 152, 0);
  color: #ffffff;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 10px;
`;
const StatBlockDeaths = styled.div`
  background: rgb(0, 0, 0);
  color: #ffffff;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 10px;
`;
const StatBlockRecoveries = styled.div`
  background: rgb(33, 150, 243);
  color: #ffffff;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 10px;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 32px;
  margin-bottom: 8px;
`;

const DateBlock = styled.p`
  font-size: 0.8rem;
  margin-bottom: ;
  color: #9e9e9e;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error...</p>;
  } else {
    return (
      <div>
        <StatGrid>
          <StatBlockConfirmed>
            <h3>🧫 Confirmed Cases</h3>
            {stats.confirmed != null ? (
              <span>
                {new Intl.NumberFormat().format(stats.confirmed.value)}
              </span>
            ) : (
              <span>Not enough data.</span>
            )}
            {error && <span>{error}</span>}
          </StatBlockConfirmed>
          <StatBlockDeaths>
            <h3>☠️ Deaths</h3>
            {stats.deaths != null ? (
              <span>{new Intl.NumberFormat().format(stats.deaths.value)}</span>
            ) : (
              <span>Not enough data.</span>
            )}
            {error && <span>{error}</span>}
          </StatBlockDeaths>
          <StatBlockRecoveries>
            <h3>🧻 Recoveries</h3>
            {stats.recovered != null ? (
              <span>
                {new Intl.NumberFormat().format(stats.recovered.value)}
              </span>
            ) : (
              <span>Not enough data.</span>
            )}
            {error && <span>{error}</span>}
          </StatBlockRecoveries>
        </StatGrid>
        <DateBlock>
          Last Updated{' '}
          {format(new Date(stats.lastUpdate), 'MM/dd/yyyy @ hh:mm:ss a')}
        </DateBlock>
      </div>
    );
  }
}
