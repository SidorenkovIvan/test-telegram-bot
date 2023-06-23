import React from 'react';

import Button from '@components/button/Button';

const AccountSuccessfulDeposit = () => {
    return (
        <>
            <Button text="Продолжить" link="/account" />
        </>
    );
};

export default AccountSuccessfulDeposit;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
