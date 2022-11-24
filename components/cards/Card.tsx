import React from 'react'

import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, IconButton, Heading, Text, Button, Box, Image, Badge } from '@chakra-ui/react'

import { heart } from "../../constants/constants"

type AppProps = {
  serialNo: string,
  bid: boolean,
  price: number,
  image: string,
  setLike: any,
  like: number
  
}

function Cards({serialNo,price,image,bid,setLike,like}:AppProps) {
  
  return (
    <Card maxW="370px" backgroundColor="#0b2237" m={2} >
     
        <CardHeader>

          <Flex flex='1' alignItems='center' flexWrap='wrap' justifyContent="space-between">
            <Badge borderRadius='full' px='2' colorScheme='teal' background="transparent" color="#545671" border="1px solid #545671">
              Hot Deal
            </Badge>
            {bid ?
            <Badge borderRadius='full' px='3' fontWeight="600" colorScheme='teal' background="transparent" color="white" border="1px solid 
            #3b4e95" >
           Sale
          </Badge>:

              <Badge borderRadius='full' px='3' fontWeight="600" colorScheme='teal' background="transparent" color="white" border="1px solid #5b4125" >
              Auction
            </Badge>
            }
          </Flex>


        </CardHeader>
        <Box px={6} >

          <Image

            src={image}
            width="270px"
            height="250px"
            borderRadius="10px"
          // alt='Chakra UI'
          />
          <Box p={2} display="flex" justifyContent="space-between">
            <Text color="white"  >
             {serialNo}
            </Text>
            <Box  >
              <Box display="flex" alignItems="center" >
                <img src={heart.image} width="20px" />
                <Text  px={1} color="#545671">
                  32
                </Text>
              </Box>

            </Box>
          </Box>
          <Text px={2} color="#356c9f" fontWeight="500"  >
            Enoch Citizen
          </Text>
        </Box>
        <Box display="flex"  alignItems="center" px={8} marginTop="5px">
          {bid ? <Box border="1px solid #545671"  position="relative"  width="91px" borderRadius="5px"> 
<Box px={1}>
          <Text sx={{marginTop:"10px"}}  textDecoration="line-through" color='grey' ><Text color="red">$300</Text></Text>
          <Text className="new-price" color="white">${price}</Text>
</Box>
          <Badge position="absolute" right="0px" top="-10px" backgroundColor="green" color="white" borderRadius="7px" >
            10% off
          </Badge>
          </Box>
            :
          <Box border="1px solid #545671" p={1} borderRadius="5px" >
            <Text color="#00bb00" fontWeight="500" >

              HIGHEST BID
            </Text>

             <Text color="white" fontWeight="500"  >
              {price}$
            </Text>
          </Box>
          }
          <Box border="1px solid #545671" p={1} borderRadius="5px" ml={2}>
            <Text color="#7ea7ce" fontWeight="500">
              AUCTION END IN
            </Text>
            <Text color="white" fontWeight="500" letterSpacing="3px"> 
              03:18:24:42s
            </Text>
          </Box>
        </Box>
        <Box  p={4}>
          {bid? <Box display="flex" justifyContent="space-between">
            <Button  width="100%" borderRadius="1px" color="white"  fontWeight="40200" backgroundColor="transparent" border="1px solid white" mr={2} >
           ADD TO CART
          </Button>
            <Button backgroundColor="#0082f5" width="100%" borderRadius="1px" color="white"  fontSize="1rem" fontWeight="400" p={2}>
           BUY NOW
          </Button>
            </Box>

           : <Button backgroundColor="#0082f5" width="100%" borderRadius="1px" color="white"  fontWeight="40200">
            BID NOW
          </Button>
          }
        </Box>
 
    </Card>
  )
}

export default Cards