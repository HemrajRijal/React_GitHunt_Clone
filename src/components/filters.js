import React from 'react';
import {
    Stack,
    Select,
    Button
} from '@chakra-ui/core';
import languages from '../data/languages.json'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/core";

import { FaTable, FaList } from 'react-icons/fa';

export function Filters() {
    return (
        <Stack isInline>
            <Select>
                {languages.map(language => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>
            <Menu>
                <MenuButton as={Button} leftIcon="calendar" bg='white' borderWidth={1} px="30px" fontWeight={400}>
                    Weekly
                </MenuButton>
                <MenuList>
                    <MenuItem>Yearly</MenuItem>
                    <MenuItem>Monthly</MenuItem>
                    <MenuItem>Weekly</MenuItem>
                    <MenuItem>Daily</MenuItem>
                </MenuList>
            </Menu>

            <Stack isInline bg="white" rounded="5px" borderWidth={1} alignItems="center" ml="10px">
                <Button h='100%' fontWeight={400} roundedRight={0} leftIcon={FaTable} bg="white">Grid</Button>
                <Button h='100%' fontWeight={400} roundedLeft={0} leftIcon={FaList} bg="white">List</Button>
            </Stack>
        </Stack>
    );
}