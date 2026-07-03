import { Box, Typography } from '@mui/material';
import { 
    GrLocation, 
    LuAlarmClock, 
    MdOutlineMailOutline, 
    MdOutlineHeadsetMic,
} from '@/assets/icons';
export default function ContactUs () {
    return (
        <Box>
            <Typography sx={{ 
                fontSize: 17, 
                fontWeight: 500, 
            }}>
                Contact Us
            </Typography>
            { contact.map(({ info, icon: Icon }, i) => 
                <Typography 
                    sx={{ mt: 1 }} 
                    key={i}
                >
                    <Icon 
                        size={20} 
                        style={{ 
                            marginRight: 5, 
                            marginBottom: -4,
                        }}
                    />
                    { info }
                </Typography>
            )}
        </Box>
    );
};
const contact = [
    { icon: GrLocation, info: 'Dhaka, Bangladesh' },
    { icon: MdOutlineHeadsetMic, info: '+01234567890' },
    { icon: MdOutlineMailOutline, info: 'example@flavex.com' },
    { icon: LuAlarmClock, info: 'Mon - Sun: 10:00 AM - 11:00 PM' },
];