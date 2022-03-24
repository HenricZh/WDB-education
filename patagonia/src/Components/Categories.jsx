import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Category from './Category'

/*
Categories Component - a scrollable horizontally aligned set of Category components
inputs
    none
*/
const Categories = () => {
    return (
        // TODO: There's missing formatting in the Box components below. Add it and Category componenets.
        <Box mt={20} m={20}>
            <HStack spacing={7} overflow="scroll" mr={-50}>
                <Category name="Browse Used" link="" background=""/>
                <Category name="Patagonia Provisions" link="" background=""/>
                <Category name="Men's" link="" background=""/>
                <Category name="Women's" link="" background=""/>
                <Category name="Kids' & Baby" link="" background=""/>
            </HStack>
            
        </Box>
    )
}

export default Categories