import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { links } from '../header/navbar/links';
export default function QuickLinks () {
    return (
        <Box sx={{
            pl: { xs: 0, md: 5 },
        }}>
            <Typography sx={{ 
                fontSize: 17, 
                fontWeight: 500, 
                color: 'var(--primary)',
                mb: 3,
            }}>
                Quick Links
            </Typography>
            { links.map(({ href, label }, i) => 
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