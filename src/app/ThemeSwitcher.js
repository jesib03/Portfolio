'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconButton } from '@chakra-ui/react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    
    },[])

    if(!mounted) return null;

    return (
        <IconButton
     
        icon={theme === 'light' ? <DarkModeIcon /> : <LightModeIcon /> }
        size='lg' 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        borderRadius="full"
        shadow="dark-lg"
        color="#D52AA6"
        className={`backdrop-blur-[4rem] fixed bottom-10 right-10 ${theme === 'dark' ? 'bg-white' : 'bg-opacity-10'}`}
        _hover={{
            shadow: 'none'
        }}
        >
            {theme === 'light' ? 'Dark' : 'Light'}
        </IconButton>
        )
}

export default ThemeSwitcher;