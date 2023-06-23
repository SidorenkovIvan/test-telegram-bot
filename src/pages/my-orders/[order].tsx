import React from 'react';

import Button from '@components/button/Button';

const MyOrder = () => {
    return (
        <>
            <Button text="Продолжить" link="/my-orders" />
        </>
    );
};

export default MyOrder;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
