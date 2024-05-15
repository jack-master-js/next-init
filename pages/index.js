import { useGlobalState } from '@/hooks/global';
import { Button } from 'antd';
import styled from 'styled-components';
import { AiFillAccountBook } from 'react-icons/ai';

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
