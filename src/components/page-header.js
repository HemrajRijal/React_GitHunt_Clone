import React from 'react';
import { Flex, Stack, Button } from '@chakra-ui/core';
import { Brand } from './brand';
import { FaGithub, FaTwitter, FaChrome } from "react-icons/fa"


export function PageHeader() {
    return (
        <Flex justifyContent='space-between' alignItems='center'>
            <Brand />

            <Stack isInline>
                <Button leftIcon={FaGithub}>View Source</Button>
                <Button leftIcon={FaChrome} variantColor='red' borderRadius='15%'>Use Extension</Button>
                <Button leftIcon={FaTwitter} variantColor='blue' borderRadius='15%'>Tweet</Button>
            </Stack>
        </Flex>

    )
}