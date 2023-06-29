import { motion } from 'framer-motion';
import { FC } from 'react';

import { ILayoutProps } from '@layouts/Layout';

const AnimationLayout: FC<ILayoutProps> = ({ children }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);

export default AnimationLayout;
