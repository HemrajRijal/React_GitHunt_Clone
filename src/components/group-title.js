import React from 'react';
import { Text } from '@chakra-ui/core';

export function GroupTitle() {
    return (
        <Text fontSize="24px" fontWeight={700}>
            This Week<Text fontSize="15px" fontWeight={500} as='span' ml='5px' color='gray.500'>June 14, 2020 – June 21, 2020</Text>
        </Text>
    )
}