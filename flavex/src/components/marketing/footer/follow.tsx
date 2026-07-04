import Link from 'next/link';
import { Flexbox } from '@/components/ui';
import IconButton from '@mui/material/IconButton';
import { FaGithub, FaLinkedin, FaYoutube, RiFiverrFill } from '@/assets/icons';
export default function FollowUs () {
    return (
        <Flexbox 
            gap={1}
            justify={{ xs: 'center', md: 'normal' }}
        >
            { follow.map(({ href, icon: Icon }, i) => 
                <Link 
                    href={href} 
                    target='_blank'
                    key={i}
                >
                    <IconButton sx={{
                        border: '1px solid var(--border)',
                    }}>
                        <Icon color='#000'/>
                    </IconButton>
                </Link>
            )}
        </Flexbox>
    );
};
const follow = [
    { href: 'https://github.com/mern-sejin2010', icon: FaGithub },
    { href: 'https://linkedin.com/in/md-sejin-ahmed', icon: FaLinkedin },
    { href: 'https://www.youtube.com/@JupiterProgrammer', icon: FaYoutube },
    { href: 'https://fiverr.com/sejin_ahmed', icon: RiFiverrFill },
];