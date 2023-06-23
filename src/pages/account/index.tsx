import React from 'react';

import Button from '@components/button/Button';

const Account = () => {
    return (
        <>
            <Button text="Продолжить" link="/account/card" />
        </>
    );
};

export default Account;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
