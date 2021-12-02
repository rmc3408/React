import React, { memo } from 'react';
import useRendersCount from './useRendersCount';

const Hi = memo(({ inc }) => {
    useRendersCount();
    return <button onClick={inc}>ADD</button>;
});

export default Hi
