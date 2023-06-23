import React from 'react';

import Button from '@components/button/Button';

const NewOrder = () => {
    return (
        <>
            <Button text="Продолжить" link="/new-order/payment" />
        </>
    );
};

export default NewOrder;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
