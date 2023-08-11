import HomePageDekstop from './HomePageDekstop';
import HomePageMobile from './HomePageMobile';
import { MediaQuery } from '@mantine/core';

const HomePage = () => {
  return (
    <>
      <MediaQuery smallerThan={900} styles={{ display: 'none' }}>
        <div>
          <HomePageDekstop />
        </div>
      </MediaQuery>
      <MediaQuery largerThan={900} styles={{ display: 'none' }}>
        <div>
          <HomePageMobile />
        </div>
      </MediaQuery>
    </>
  );
};

export default HomePage;
