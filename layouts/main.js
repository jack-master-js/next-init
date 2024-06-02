import NavBar from '@/components/navbar';
import { ConfigProvider } from 'antd';

export default function MainLayout({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ba0000'
                }
            }}
        >
            <div className="container flex items-center justify-between py-4">
                <div className="flex-none w-40 h-16 grid place-content-center text-2xl font-extrabold text-gray-300 border">
                    LOGO
                </div>
                <div className="flex-auto pl-10">
                    <NavBar />
                </div>
            </div>
            {children}
            <div className="h-10"></div>
        </ConfigProvider>
    );
}
