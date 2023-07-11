import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    colors: {
        primary: {
            50: '#daf9ff',
            100: '#ade9ff',
            200: '#7dd9ff',
            300: '#4dcaff',
            400: '#24bbfe',
            500: '#12a1e5',
            600: '#007db3',
            700: '#005a81',
            800: '#003650',
            900: '#001320',
        },
        success: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
        },
        warning: {
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            300: '#FCD34D',
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
        },
        error: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
        },
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
})

export default theme;