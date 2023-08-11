import { Burger, Flex, Header, Paper, Text, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Header py={14} px={30} height={60}>
        <Flex h={'100%'} align={'center'} justify={'space-between'}>
          <Logo />
          <Burger opened={opened} onClick={toggle} size={20} />
        </Flex>
      </Header>
      <Transition transition="fade" duration={100} mounted={opened}>
        {() => (
          <Paper className="absolute" w={'100%'} radius={0}>
            <Text px={12} py={8}>
              test
            </Text>
            <Text px={12} py={8}>
              test
            </Text>
            <Text px={12} py={8}>
              test
            </Text>
          </Paper>
        )}
      </Transition>
    </>
  );
};

export default Navbar;
