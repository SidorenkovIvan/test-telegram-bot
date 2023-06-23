import React from 'react';

import Button from '@components/button/Button';

const AccountDeposit = () => {
    return (
        <>
            <Button text="Продолжить" link="/account/card/successful-deposit" />
        </>
    );
};

export default AccountDeposit;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
