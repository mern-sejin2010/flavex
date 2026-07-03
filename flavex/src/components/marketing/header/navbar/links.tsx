import { 
    RiHome9Line,
    TbUser,
    LuUsers, 
    BsBoxArrowRight,
    MdOutlineHeadsetMic,
    LuGalleryVerticalEnd,
    BiFoodMenu,
    FaRegStar,
} from '@/assets/icons';
// styles
const styles = {
    login: {
        py: 1, 
        gap: 1, 
        width: '100%',
        border: '1px solid var(--border)',
    },
    reserveTable: { 
        py: 1, 
        gap: 1, 
        width: '100%',
        background: 'var(--primary)', 
        color: '#fff',
        '& span': {
            color: '#fff',
        },
    },
};
// links
export const links = [
    { href: '/home', label: 'Home', icon: RiHome9Line },
    { href: '/about', label: 'About Us', icon: LuUsers },
    { href: '/menu', label: 'Menu', icon: BiFoodMenu },
    { href: '/special', label: 'Specials', icon: FaRegStar },
    { href: '/gallery', label: 'Gallery', icon: LuGalleryVerticalEnd },
    { href: '/contact', label: 'Contact', icon: MdOutlineHeadsetMic },
];
// more links
export const moreLinks = [
    { href: '/login', label: 'Login', icon: TbUser, style: styles.login },
    { href: '/reserve-table', label: 'Reserve a Table', icon: BsBoxArrowRight, style: styles.reserveTable },
];