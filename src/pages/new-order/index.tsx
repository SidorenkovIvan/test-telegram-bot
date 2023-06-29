import React from 'react';

import Button from '@components/button/Button';
import AnimationLayout from '@layouts/AnimationLayout';

const NewOrder = () => {
  return (
    <AnimationLayout>
      <Button text="Продолжить" link="/new-order/payment" />
    </AnimationLayout>
  );
};

export default NewOrder;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
