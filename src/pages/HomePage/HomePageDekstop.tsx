import Default from '@components/templates/Default/Default';
import { BackgroundImage, Divider, Flex, Paper, Select, Stack, Text, UnstyledButton, clsx } from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconCircle, IconCircleFilled } from '@tabler/icons-react';
import { Carousel } from 'react-responsive-carousel';

import { ReactComponent as CoreValuesImage } from '@assets/images/banners/core_values.svg';
import { ReactComponent as LogoWhite } from '@assets/logo-white.svg';
import { ReactComponent as Accesories } from '@assets/images/icons/Accesories.svg';
import { ReactComponent as SpeedImprovement } from '@assets/images/icons/Speed_Improvement.svg';
import { ReactComponent as Exhaust } from '@assets/images/icons/Exhaust.svg';
import heroDekstopImg from '@assets/images/banners/hero-dekstop.png';
import footerImg from '@assets/images/banners/footer.png';
import { useHomePage } from './useHomePage';

const HomePageDekstop = () => {
  const { currentSlide, setCurrentSlide, carouselData, ourCoreValuesData, handlePrevSlide, handleNextSlide } =
    useHomePage();

  return (
    <Default title={'Company'}>
      <BackgroundImage src={heroDekstopImg} h={551} w={'auto'}>
        <Flex direction={'column'} h={'100%'} pb={74} px={40} justify={'end'} gap={16}>
          <Text maw={'60%'} fz={36} fw={500} lh={'34px'} color="white" align="start">
            Discover Your Wonder
          </Text>
          <Text fz={16} fw={400} lh={'24px'} color="white" align="start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex>
        <Paper w={'100%'} py={35} px={20} bg={'#509FDD'} radius={0}>
          <Paper w={'100%'} h={'100%'} pt={48} pb={74} px={40}>
            <Stack spacing={70}>
              <Carousel
                emulateTouch={true}
                selectedItem={currentSlide}
                onChange={(e) => setCurrentSlide(e)}
                infiniteLoop={true}
                autoPlay={true}
                autoFocus={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
              >
                {carouselData.map((carouselItem: any, carouselIndex: number) => {
                  return (
                    <div key={carouselIndex}>
                      <Text fz={36} fw={500} lh={'30px'} color="#029FE4">
                        {carouselItem.title}
                      </Text>
                      <Text mt={12} fz={18} fw={400} lh={'38px'}>
                        {carouselItem.department}
                      </Text>
                      <Text fz={14} fw={400} lh={'24px'} color="#777777">
                        {carouselItem.description}
                      </Text>
                    </div>
                  );
                })}
              </Carousel>
              <Flex justify={'space-between'}>
                <Flex align={'end'} gap={4}>
                  <Text fz={24} fw={500} lh={'38px'}>
                    {String('0' + Number(currentSlide + 1)).slice(-2)}
                  </Text>
                  <Text fz={24} fw={500} lh={'38px'} color="#C0C0C0">
                    /
                  </Text>
                  <Text fz={16} fw={500} color="#C0C0C0">
                    {String('0' + Number(carouselData.length)).slice(-2)}
                  </Text>
                </Flex>
                <Flex>
                  <UnstyledButton
                    p={12}
                    className={clsx(currentSlide !== 0 ? 'bg-[#1BA0E1]' : 'bg-[#F1F1F1]')}
                    variant="default"
                    onClick={handlePrevSlide}
                  >
                    <IconArrowLeft color={currentSlide !== 0 ? 'white' : '#B6B6B6'} size={28} />
                  </UnstyledButton>
                  <UnstyledButton
                    p={12}
                    className={currentSlide === carouselData.length - 1 ? 'bg-[#F1F1F1]' : 'bg-[#1BA0E1]'}
                    variant="default"
                    onClick={handleNextSlide}
                  >
                    <IconArrowRight color={currentSlide === carouselData.length - 1 ? '#B6B6B6' : 'white'} size={28} />
                  </UnstyledButton>
                </Flex>
              </Flex>
            </Stack>
          </Paper>
        </Paper>
        <Paper w={'100%'} py={35} px={20} bg={'#509FDD'} radius={0}>
          <Paper px={12} py={40}>
            <Text px={12} fz={24} fw={700} color="#029FE4" tt={'uppercase'}>
              Our Speciality
            </Text>
            <Text mt={16} px={12} fz={14} fw={300} lh={'24px'} color="#303030" align="start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis
              nulla consequat. Sed commodo nunc sit amet congue aliquam.
            </Text>
            <Flex w={'100%'} mt={28}>
              <Carousel
                className="w-full"
                emulateTouch={true}
                autoFocus={true}
                autoPlay={true}
                infiniteLoop={true}
                centerMode={true}
                width={'100%'}
                centerSlidePercentage={30}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
              >
                <Accesories width={'auto'} />
                <SpeedImprovement width={'auto'} />
                <Exhaust width={'auto'} />
              </Carousel>
            </Flex>
            <Text mt={38} px={12} fz={14} fw={300} lh={'24px'} color="#A7A7A7" align="start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis
              nulla consequat. Sed commodo nunc sit amet congue aliquam.
            </Text>
            <Flex mt={40} align={'center'} justify={'space-between'}>
              <IconArrowLeft color="#D2D2D2" />
              <Flex align={'center'} gap={20}>
                <IconCircleFilled size={12} />
                <IconCircle size={12} />
                <IconCircle size={12} />
                <IconCircle size={12} />
              </Flex>
              <IconArrowRight color="#3D46A2" />
            </Flex>
          </Paper>
        </Paper>
      </Flex>
      <Paper py={56} bg={'#F8F8F8'}>
        <Flex direction={'row'} gap={36} mx={80}>
          <Stack maw={'50%'} spacing={24}>
            <Text fz={36} fw={500} lh={'30px'} color="#029FE4" align="center">
              Our Core Values
            </Text>
            <Text
              px={10}
              className="whitespace-pre-line"
              align="start"
            >{`Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.

In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.`}</Text>
            <Stack spacing={24}>
              {ourCoreValuesData.map((coreItem: any, coreIndex: number) => {
                return (
                  <Flex key={coreIndex} gap={18}>
                    <Divider mt={18} w={26} size={2} color="#747474" />
                    <Stack className="max-w-[90%]" spacing={6}>
                      <Text fz={24} fw={400} lh={'38px'}>
                        {coreItem.title}
                      </Text>
                      <Text fz={16} fw={400} lh={'24px'} color="#777777" align="start">
                        {coreItem.description}
                      </Text>
                    </Stack>
                  </Flex>
                );
              })}
            </Stack>
          </Stack>
          <Flex className="overflow-hidden" mt={28} align={'end'} justify={'end'}>
            <CoreValuesImage className="translate-x-[80px]" width={'100%'} />
          </Flex>
        </Flex>
      </Paper>
      <BackgroundImage src={footerImg} mih={655} py={34} px={26}>
        <Stack pt={36} px={80} spacing={30}>
          <LogoWhite />
          <Paper p={24}>
            <Stack spacing={40}>
              <Select
                defaultValue={'Technology Company'}
                data={[
                  { value: 'Technology Company', label: 'Technology Company' },
                  { value: 'Professional Brand Management', label: 'Professional Brand Management' },
                  { value: 'Strategize, Design, Collaborate', label: 'Strategize, Design, Collaborate' },
                ]}
              />
              <Text maw={'55%'} fz={18} fw={400} color="#25A0D8" align="start">
                Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
              </Text>
            </Stack>
          </Paper>
          <Stack>
            {carouselData.map((carouselItem: any, carouselIndex: number) => {
              return (
                <Text key={carouselIndex} fz={16} fw={400} lh={'48px'} color="white">
                  {carouselItem.title}
                </Text>
              );
            })}
          </Stack>
        </Stack>
      </BackgroundImage>
    </Default>
  );
};

export default HomePageDekstop;
