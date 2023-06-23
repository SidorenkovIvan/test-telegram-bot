import React from 'react';

import Button from '@components/button/Button';

const MyOrders = () => {
    return (
        <>
            <Button text="Продолжить" link="/my-orders" />
        </>
    );
};

export default MyOrders;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
