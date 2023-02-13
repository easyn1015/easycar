import { useLocation } from 'react-router-dom';

const useCurrentPageName = () => {
    const location = useLocation();

    return () => {
        switch (location.pathname) {
            case '/':
            default:
                return '홈';
            case '/list':
                return '차량 리스트';
        }
    };
};

export default useCurrentPageName;
