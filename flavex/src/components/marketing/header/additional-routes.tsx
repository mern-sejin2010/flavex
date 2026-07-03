import Link from 'next/link';
import { IconButton, Typography } from '@mui/material';
import { CustomLink, Flexbox } from '@/components/ui';
import { BsBoxArrowRight, IoIosSearch } from '@/assets/icons';
import ShoppingCart from './shopping-cart';
export default function AdditionalRoutes ({
    direction = 'row',
    display = { xs: 'none', md: 'flex' },
    sx,
} : {
    direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
    display?: string | object;
    sx?: object;
}) {
    return (
        <Flexbox 
            gap={2} 
            direction={direction}
            display={display}
        >
            <Link href='/search'>
                <IconButton aria-label='search'>
                    <IoIosSearch color='#000'/>
                </IconButton>
            </Link>
            <ShoppingCart/>
            <CustomLink 
                href='/book-table' 
                sx={{
                    ...styles.bookTable,
                    ...sx,
                }}
            >
                    <BsBoxArrowRight size={20}/>
                    <Typography 
                        component='span' 
                        sx={{ 
                            color: '#fff', 
                            fontWeight: 500, 
                        }}
                    >
                        Reserve a Table
                    </Typography>
            </CustomLink>
        </Flexbox>
    );
};
const styles = {
    bookTable: { 
        py: 1, 
        gap: 1, 
        background: 'var(--primary)', 
        color: '#fff',
        display: { xs: 'none', lg: 'flex' },
    },
};