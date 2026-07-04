import WebBrand from '../header/web-brand';
import ContactUs from './contact';
import QuickLinks from './quick-links';
import Information from './information';
import FollowUs from './follow';
import { Box, Container, Grid, Typography } from '@mui/material';
export default function Footer () {
    return (
        <Box 
            component='footer' 
            sx={styles.footer}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <WebBrand size={100}/>
                        <Typography sx={styles.details}>
                            Delicious food made with love and the finest ingredients.
                            Visit us and experience the difference.
                        </Typography>
                        <FollowUs/>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <QuickLinks/>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Information/>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <ContactUs/>
                    </Grid>
                </Grid>
                <Box sx={styles.copyright}>
                    <Typography>
                        &copy; { new Date().getUTCFullYear() } {' '}
                        Copyright, Flavex restaurant. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
const styles = {
    footer: {
        pt: 5,
        background: '#fff',
        borderTop: '1px solid var(--border)', 
        textAlign: { xs: 'center', md: 'start' }, 
    },
    details: { 
        my: 2, 
        maxWidth: 500, 
        mx: { xs: 'auto', md: 0 },
    },
    copyright: { 
        py: 3, 
        mt: 3,
        borderTop: '1px solid var(--border)', 
        textAlign: 'center', 
        '& p': { 
            fontWeight: 500,
        },
    },
};