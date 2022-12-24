import { useEffect, useState } from 'react';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from '../service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        <h2>Home</h2>
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
