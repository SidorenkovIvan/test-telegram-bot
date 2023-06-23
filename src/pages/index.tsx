import React from 'react';

import Button from '@components/button/Button';

const Home = () => {
  return (
    <>
        <Button text="Продолжить" link="/new-order" />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
