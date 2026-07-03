import { Box, Container } from '@mui/material';
import { Flexbox } from '@/components/ui';
import WebBrand from './web-brand';
import AdditionalRoutes from './additional-routes';
import DesktopNavbar from './navbar/desktop';
import MobileNavbar from './navbar/mobile';
import SpecialOffer from './special-offer';
export default function Header () {
    return (
        <Box 
            component='header' 
            sx={styles.header}
        >
            <SpecialOffer/>
            <Container>
                <Flexbox 
                    align='center' 
                    justify='space-between'
                >
                    <WebBrand/>
                    <DesktopNavbar/>
                    <MobileNavbar/>
                    <AdditionalRoutes/>
                </Flexbox>
            </Container>
        </Box>
    );
};
const styles = {
    header: {
        background: '#fff',
        position: 'sticky',
        top: 0,
    },
};