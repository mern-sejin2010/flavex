import { Badge, IconButton } from '@mui/material';
import { BsCart2 } from '@/assets/icons';
export default function ShoppingCart () {
    return (
        <IconButton aria-label='cart'>
            <Badge 
                max={10} 
                badgeContent={11} 
                color='primary'
            >
                <BsCart2 color='#000'/>
            </Badge>
        </IconButton>
    );
};