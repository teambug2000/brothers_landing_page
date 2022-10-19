import { TickerTape } from "react-ts-tradingview-widgets";
import {Box} from "@chakra-ui/react"

export function Tape() {
  return (
    <Box w='100%' h='44px' p='0' pos='relative'>
      <TickerTape colorTheme='dark' displayMode='regular' symbols={[
        {
          "proName":"BITSTAMP:BTCUSD",
          "title":"BTCUSD"
        },
        {
          "proName":"BITSTAMP:ETHUSD",
          "title":"ETHUSD"
        },
        {
          "proName":"BITSTAMP:DOTUSD",
          "title":"DOTUSD"
        }
      ]}></TickerTape>

    </Box>
  )
}