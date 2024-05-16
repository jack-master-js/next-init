import { useGlobalState } from '@/hooks/global';
import { Button } from 'antd';
import styled from 'styled-components';
import { AiFillAccountBook } from 'react-icons/ai';
import Image from 'next/image';

const Index = () => {
    const { isLoading } = useGlobalState();
    console.log(isLoading);

    return (
        <div>
            <div>index</div>
            <div className="flex">
                <div>a</div>
                <div>a</div>
                <div>a</div>
            </div>
            <StyledButton type="primary">Button</StyledButton>
            <AiFillAccountBook />
            <div className="fixed top-0 left-0 h-screen w-screen -z-10">
                <Image
                    alt="js"
                    src="/js.jpg"
                    priority
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};

const StyledButton = styled(Button)`
    color: red;
    & > span {
        color: purple;
    }
`;

export default Index;
