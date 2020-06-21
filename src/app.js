import React from 'react'
import { Box } from '@chakra-ui/core'
import { Feed } from './feed'


export function App() {
    return (
        <Box bg="gray.100" width="100vw" minHeight="100vh"  >
            <Feed />
        </Box>
    )
}