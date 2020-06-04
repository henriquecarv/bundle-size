import { styles } from './styles';
import { ReactNode } from 'react';
import Head from 'next/head';

interface IProps {
  children: ReactNode;
  title?: string;
}

export default function ({ children, title }: IProps) {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
        </Head>
      )}

      <div className="Layout__Container">
        <div className="Layout_Wrapper">
          <div className="Layout">{children}</div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
