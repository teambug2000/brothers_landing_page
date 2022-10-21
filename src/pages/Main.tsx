import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
export function HeroPage() {
  return (
    <>
      <Container maxW={'7xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 40 }}
          mt={{base:0, md:40}}
          mb={{base:0, md:40}}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Phí thấp, tốc độ nhanh <br />
            <Text as={'span'} color={'#FECA06'}>
            Hệ sinh thái thân thiện, mở rộng dễ dàng
            </Text>
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'#FECA06'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'yellow.500',
              }}>
              Liên hệ ngay
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
export default function MainFeature() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('Substrate.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Công nghệ
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Substrate technology
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Brothers chain sử dụng nền tảng công nghệ substrate của polkadot
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'NPOS',
    content: (
      <>
        <StatsText>Cơ chế đồng thuận</StatsText> nhanh, an toàn và chính xác
      </>
    ),
  },
  {
    title: 'Hiệu suất',
    content: (
      <>
        <StatsText>Cao</StatsText> mà vẫn đảm bảo an toàn cho bộ nhớ
      </>
    ),
  },
  {
    title: 'Tương thích',
    content: (
      <>
        <StatsText>EVM</StatsText> dễ dàng tích hợp với Ethereum chain, EVM smart contract
      </>
    ),
  },
  {
    title: 'BFT',
    content: (
      <>
        <StatsText>Thuật toán</StatsText> đảm bảo blockchain hoạt động bình thường ngay cả khi một số node bị lỗi
      </>
    ),
  },
];
export function WhatToBuild() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('Substrate.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Công nghệ
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Substrate technology
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Brothers chain sử dụng nền tảng công nghệ substrate của polkadot
              </Text>
            </Box>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}