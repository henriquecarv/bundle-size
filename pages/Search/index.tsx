import { styles } from '../../styles/SearchPageStyles';
import Link from 'next/link';

export default function Search() {
  return (
    <>
      <div className="Search">
        <Link href="/package/[id]" as="package/react">
          <a>React</a>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
