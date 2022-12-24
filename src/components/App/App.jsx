import { Routes, Route } from 'react-router-dom';
import { Header, Loader } from 'components';
import { CountrySearch, Home, Country } from 'pages';

export const App = () => {
  // return <Loader />;
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
