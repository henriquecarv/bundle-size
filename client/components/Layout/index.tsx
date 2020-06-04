import { styles } from './styles';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function ({ children }: IProps) {
  return (
    <>
      <div className="Layout__Container">
        <div className="Layout_Wrapper">
          <div className="Layout">{children}</div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
