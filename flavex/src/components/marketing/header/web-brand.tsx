import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Logo } from '@/assets/images';
export default function WebBrand ({
    size = 60,
} : { 
    size?: number;
 }) {
    return (
        <Box>
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