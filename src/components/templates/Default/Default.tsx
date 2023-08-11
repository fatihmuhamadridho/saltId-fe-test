import { Container } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import Navbar from '@components/organisms/Navbar/Navbar';

interface DefaultProps {
  title?: any;
}

const Default = ({ title }: DefaultProps) => {
  useEffect(() => {
    document.title = title || `localhost:${import.meta.env.MODE}`;
  }, [title]);

  return (
    <>
      <Container fluid p={0}>
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
};

export default Default;
