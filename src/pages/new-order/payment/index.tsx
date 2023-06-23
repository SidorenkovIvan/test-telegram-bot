import React from 'react';

import Button from '@components/button/Button';

const NewOrderPayment = () => {
    return (
        <>
            <Button text="Продолжить" link="/new-order/payment/successful-payment" />
        </>
    );
};

export default NewOrderPayment;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
