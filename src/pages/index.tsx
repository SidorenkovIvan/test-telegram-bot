import React, { useState } from 'react';

import Button from '@components/button/Button';
import styles from './index.module.scss';
import AnimationLayout from '@layouts/AnimationLayout';

interface IInputObject {
  id: number;
  text: string
}

const Home = () => {
  const [orderUrls, setOrderUrls] = useState<IInputObject[]>([{ id: 1, text: '' }]);
  const [orderId, setOrderId] = useState(2);

  const addUrl = () => {
    setOrderUrls([...orderUrls, { id: orderId, text: '' }]);
    setOrderId(prevState => prevState + 1);
  };

  const deleteUrl = (inputId: number) => setOrderUrls(orderUrls.filter(({ id }) => inputId !== id));

  return (
    <AnimationLayout>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>Сделать заказ</h1>
        <aside className={`item ${styles.descriptionText}`}>
          Вставьте ссылку на товар, после размещения товара менеджер AIPD проверит товар, введет окончательную сумму и
          вышлет вам уведомление на оплату c детальным расчетом.
        </aside>
        <h4>Ссылка на заказ</h4>
        {orderUrls.map(({ id }, index) => index !== 0 ?
          <div className={styles.orderUrlWrapper} key={id}>
            <input className={`item ${styles.urlInput}`} />
            <p className={`item ${styles.deleteOrderUrl}`} onClick={() => deleteUrl(id)}>X</p>
          </div> :
          <input className={`item ${styles.urlInput}`} key={id} />
        )}
        <p className={`link ${styles.newOrderButton}`} onClick={addUrl}>+ добавить еще один заказ</p>
        <Button text="Продолжить" link="/new-order" />
      </section>
    </AnimationLayout>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
