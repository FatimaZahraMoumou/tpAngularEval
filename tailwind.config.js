/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#1565C0',
                secondary: '#2F2F2F',
                tertiary: '#3F3F3F',
                quaternary: '#4F4F4F',
                quinary: '#5F5F5F',

                primaryLight: '#BBDEFB',
                secondaryLight: '#7F7F7F',
                tertiaryLight: '#8F8F8F',
                quaternaryLight: '#9F9F9F',
                quinaryLight: '#AFAFAF',

                primaryDark: '#0F0F0F',
                secondaryDark: '#0F0F0F',
                tertiaryDark: '#0F0F0F',
                quaternaryDark: '#0F0F0F',
                quinaryDark: '#0F0F0F',

                danger: '#F44336',
                success: '#4CAF50',
                warning: '#FFC107',
                info: '#2196F3',
            },
        },
    },
    plugins: [],
}
