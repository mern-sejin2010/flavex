import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Logo } from '@/assets/images';
export default function WebBrand ({
    size = 60,
    sx,
} : { 
    size?: number;
    sx?: object;
 }) {
    return (
        <Box sx={sx}>
            <Link href='/'>
                <Image 
                    src={Logo} 
                    height={size} 
                    alt='logo-paynex'
                    loading='eager'
                />
            </Link>
        </Box>
    );
};