import React from 'react'
import { Flex, Image, Heading, Text, Box } from '@chakra-ui/core'

export function Brand() {
    return (
        <Flex alignItems='center' pt='15px'>
            <Image src="/logo.svg" />
            <Box ml='10px'>
                <Heading fontSize='24px'>GitHunt</Heading>
                <Text color='gray.600'>Most Starred projects on Github</Text>
            </Box>
        </Flex>
    )
}
