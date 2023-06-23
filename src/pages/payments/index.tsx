import React from 'react';

import Button from '@components/button/Button';

const Payments = () => {
    return (
        <>
            <Button text="Продолжить" link="/profile/filter" />
        </>
    );
};

export default Payments;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
