import { Flexbox } from '@/components/ui';
import { Box, Container, Typography } from '@mui/material';
import { FaRegStar, LuAlarmClock } from '@/assets/icons';
export default function SpecialOffer () {
    return (
        <Box sx={styles.parent}>
            <Container>
                <Flexbox justify='space-between'>
                    <Typography>
                        <FaRegStar/>
                        Special Offer ! Get 20% off on your first order
                    </Typography>
                    <Typography sx={{ 
                        display: { xs: 'none', md: 'inherit' }
                    }}>
                        <LuAlarmClock/>
                        Open 10:00 AM - 11:00 PM
                    </Typography>
                </Flexbox>
            </Container>
        </Box>
    );
};
const styles = {
    parent: {
        py: 1,
        background: '#f6f5f7',
        '& p': {
            fontSize: 14,
            fontWeight: 500,
        },
        '& svg': {
            fontSize: 18,
            color: 'var(--primary)',
            marginBottom: -0.4,
            marginRight: 1,
        },
    },
};