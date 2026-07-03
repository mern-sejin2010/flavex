import { Box, Container, Grid, Typography } from "@mui/material";
import WebBrand from "../header/web-brand";
import ContactUs from "./contact";

export default function Footer () {
    return (
        <Box 
            component='footer' 
            sx={styles.footer}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        <WebBrand size={100}/>
                        <Typography sx={{ fontWeight: 500, my: 2 }}>
                            Delicious food made with love and the finest ingredients.
                            Visit us and experience the difference.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        a
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        a
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
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
        py: 5,
        borderTop: '1px solid var(--border)', 
        textAlign: { xs: 'center', md: 'start' }, 
    },
    copyright: { 
        py: 3, 
        borderTop: '1px solid var(--border)', 
        textAlign: 'center', 
        '& p': { 
            fontWeight: 500,
        },
    },
};