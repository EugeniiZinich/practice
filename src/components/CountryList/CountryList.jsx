import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {countries.map(({ id, flag }) => {
          return (
            <li key={id}>
              <p>{id}</p>
              <img src={flag} alt={id} width={40} />
            </li>
          );
        })}
      </Grid>
    </>
  );
};
