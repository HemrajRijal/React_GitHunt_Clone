import React from 'react';
import { Box, Flex, SimpleGrid, Button } from '@chakra-ui/core';
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repo } from './components/repo';

export function Feed() {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />

            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Filters />
            </Flex>

            <SimpleGrid columns={3} rounded='5px' spacing='15px'>
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
            </SimpleGrid>

            <Flex justifyContent='center' alignItems='center' my='15px'>
                <Button variantColor='blue'>Load Next Group</Button>
            </Flex>
        </Box>


    );
}

