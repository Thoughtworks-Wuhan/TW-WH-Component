import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const browserHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default browserHistory;
