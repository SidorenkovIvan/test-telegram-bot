import React from 'react';

import Button from '@components/button/Button';

const Profile = () => {
    return (
        <>
            <Button text="Продолжить" link="/profile/edit" />
        </>
    );
};

export default Profile;

export const getServerSideProps = () => {
    return {
        props: {},
    };
};
