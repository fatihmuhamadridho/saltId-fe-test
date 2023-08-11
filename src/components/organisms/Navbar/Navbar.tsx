import { Burger, Flex, Header } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Header py={14} px={30} height={60}>
      <Flex h={'100%'} align={'center'} justify={'space-between'}>
        <Logo />
        <Burger opened={opened} onClick={toggle} />
      </Flex>
    </Header>
  );
};

export default Navbar;
