import React from 'react';
import { Image, Box, Flex, Heading, Text, Link, Stack, Button } from '@chakra-ui/core';
import { GoStar, GoIssueOpened, GoRepoForked } from 'react-icons/go';


export function Repo() {
    return (
        <Box bg="white" borderWidth={1} p="15px" rounded="5px">
            <Flex mb='15px'>
                <Image
                    src="https://avatars1.githubusercontent.com/u/12014105?s=400&u=629e1a050ac9588fe7b5d34617d82784fc48e84f&v=4"
                    w={'35px'}
                    h={'35px'}
                    rounded='5px'
                />
                <Box ml='10px'>
                    <Heading fontSize="16px">Hemraj Rijal</Heading>
                    <Text fontSize="13px">View ProFile</Text>
                </Box>
            </Flex>
            <Box mb='15px'>
                <Box mb='10px'>
                    <Heading fontSize='19px' as='a' href="https://github.com/kamranahmedse/githunt" target="_blank" color="purple.700">GitHunt</Heading>
                    <Text fontSize='14px' color="gray.600">Built by &middot; <Link fontWeight="bold" href="https://github.com/kamranahmedse" target='_blank'>Hemraj Rijal</Link> &middot;June 21 2020</Text>
                    <Text fontsize='14px' color="gray.900">Hunt Most Starred Project in Github</Text>
                </Box>
            </Box>

            <Stack isInline>
                <Button as='a' cursor='pointer' leftIcon={GoStar} variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecoration:'none'}}>250</Button>
                <Button as='a' cursor='pointer' leftIcon={GoRepoForked} variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecoration:'none'}}>250</Button>
                <Button as='a' cursor='pointer' leftIcon={GoIssueOpened} variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecoration:'none'}}>250</Button>
            </Stack>
        </Box>
    );
}