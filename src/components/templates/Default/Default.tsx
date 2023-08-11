import { Container } from '@mantine/core';
import { useEffect } from 'react';
import Navbar from '@components/organisms/Navbar/Navbar';

interface DefaultProps {
  title?: any;
  children?: any;
}

const Default = ({ title, children }: DefaultProps) => {
  useEffect(() => {
    document.title = title || `localhost:${import.meta.env.MODE}`;
  }, [title]);

  return (
    <>
      <Container fluid p={0}>
        <Navbar />
        <Container fluid p={0}>
          {children}
        </Container>
      </Container>
    </>
  );
};

export default Default;
