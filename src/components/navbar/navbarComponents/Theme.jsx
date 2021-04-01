import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
function Theme() {

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <header>
            <Button borderRadius="120px" width={2} onClick={toggleColorMode}>
                {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
        </header>
    );

}

export default Theme
