import Link from 'next/link';
import { Box, Typography } from '@mui/material';
export default function Information () {
    return (
        <Box>
            <Typography sx={{ 
                fontSize: 17, 
                fontWeight: 500, 
                color: 'var(--primary)',
                mb: 3,
            }}>
                Information
            </Typography>
            { info.map(({ href, label }, i) => 
                <Typography 
                    sx={{ 
                        mb: 1, 
                        'a:hover': { 
                            color: 'var(--primary)' 
                        },
                    }} 
                    key={i}
                >
                    <Link href={href}>
                        { label }
                    </Link>
                </Typography>
            )}
        </Box>
    );
};
const info = [
    { href: '/about', label: 'About Us' },
    { href: '/chef', label: 'Our Chefs' },
    { href: '/career', label: 'Careers' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms & Conditions' },
    { href: '/faq', label: 'FAQ' },
];