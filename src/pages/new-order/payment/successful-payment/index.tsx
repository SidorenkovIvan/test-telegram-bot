import React from 'react';

import Button from '@components/button/Button';

const NewOrderSuccessfulPayment = () => {
    return (
        <>
            <Button text="Продолжить" link="/" />
        </>
    );
};

export default NewOrderSuccessfulPayment;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
