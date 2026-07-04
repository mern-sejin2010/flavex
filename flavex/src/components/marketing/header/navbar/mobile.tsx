'use client';
import Link from 'next/link';
import { useState } from 'react';
import { links, moreLinks } from './links';
import { Box, Divider, Drawer, Typography, IconButton } from '@mui/material';
import { CustomLink, Flexbox } from '@/components/ui';
import { IoIosSearch, RiMenu3Fill } from '@/assets/icons';
import WebBrand from '../web-brand';
import ShoppingCart from '../shopping-cart';
export default function MobileNavbar () {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{
            display: { xs: 'inherit', md: 'none' },
        }}>
            <Flexbox gap={2}>
                <Link href='/search'>
                    <IconButton aria-label='search'>
                        <IoIosSearch color='#000'/>
                    </IconButton>
                </Link>
                <ShoppingCart/>
                <IconButton onClick={() => setOpen(true)}>
                    <RiMenu3Fill color='#000'/>
                </IconButton>
            </Flexbox>
            <Drawer 
                open={open} 
                onClose={() => setOpen(false)}
                anchor='right'
                closeAfterTransition={false}
                sx={styles.drawer}
            >
                <WebBrand sx={{ p: 0.5 }}/>
                <Flexbox 
                    direction='column' 
                    gap={0.5} 
                    sx={{ py: 3 }}
                >
                    { links.map(({ href, label, icon: Icon }, i) => 
                        <CustomLink 
                            href={href} 
                            sx={styles.link}
                            key={i} 
                        >
                            <Icon 
                                size={20} 
                                color='var(--black)'
                            />
                            <Typography
                                component='span' 
                                sx={{ fontWeight: 500 }}
                            >
                                { label }
                            </Typography>
                        </CustomLink>
                    )}
                    <Divider/>
                    <Flexbox 
                        direction='column' 
                        gap={2}
                    >
                        { moreLinks.map(({ href, label, style, icon: Icon } , i) => 
                            <CustomLink 
                                href={href} 
                                sx={style}
                                key={i}
                            >
                                <Icon size={20}/>
                                <Typography 
                                    component='span' 
                                    sx={{ fontWeight: 500 }}
                                >
                                    { label }
                                </Typography>
                            </CustomLink>
                        )}
                    </Flexbox>
                </Flexbox>
            </Drawer>
        </Box>
    );
};
const styles = {
    drawer: {
        zIndex: 'var(--z-index)',
        '& .MuiDrawer-paper': {
            px: 2,
            py: 0.5,
            width: 250,
            background: '#fff',
        },
    },
    link: { 
        py: 1.1,
        width: '100%', 
        justifyContent: 'start',
        gap: 1,
    },
};