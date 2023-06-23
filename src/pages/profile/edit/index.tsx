import React from 'react';

import Button from '@components/button/Button';

const ProfileEdit = () => {
    return (
        <>
            <Button text="Продолжить" link="/profile" />
        </>
    );
};

export default ProfileEdit;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
