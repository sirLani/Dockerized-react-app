import React, { ReactNode } from "react";
import styles from './Box.module.scss'

export const Box: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.Box}>{children}</div>;
};

// interface Props {
//   text: string;
// }

// export const Box: React.FC<Props> = () => {
//   return <></>;
// };
