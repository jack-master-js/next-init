import { Menu } from 'antd';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const items = [
    {
        label: 'HOME',
        key: 'home'
    },
    {
        label: 'NEWS',
        key: 'news'
    },
    {
        label: 'EVENTS',
        key: 'events'
    },
    {
        label: 'ABOUT',
        key: 'about'
    }
];

const NavBar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        router.push(`/${e.key}`);
    };

    useEffect(() => {
        setCurrent(pathName.replace('/', ''));
    }, [pathName]);

    return (
        <StyledMenu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

const StyledMenu = styled(Menu)`
    border-bottom: none !important;
`;

export default NavBar;
