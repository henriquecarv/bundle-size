import { styles } from './styles';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function ({ children }: IProps) {
  return (
    <>
      <div className="Layout">{children}</div>
      <style jsx>{styles}</style>
    </>
  );
}
