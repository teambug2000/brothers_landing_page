import {Box} from '@chakra-ui/react';
export function But(){
  return (
    <Box
      as='button'
      width='150px'
      height='41px'
      lineHeight='1.2'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      px='8px'
      borderRadius='8px'
      fontSize='14px'
      fontWeight='semibold'
      bg='#1A202C'
      color='white'
      _hover={{ bg: '#FECA06', color:'#1A202C' }}
      _active={{
      bg: '#dddfe2',
      transform: 'scale(0.98)',
      }}
      _focus={{
      boxShadow:
        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
    >
    Tiếng Việt | USD
    </Box>
  )
}