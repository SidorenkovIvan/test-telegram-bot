import React from 'react';

import Button from '@components/button/Button';

const PaymentsFilter = () => {
    return (
        <>
            <Button text="Продолжить" link="/profile" />
        </>
    );
};

export default PaymentsFilter;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
