import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navigation/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-20 justify-center items-center gap-10 max-lg-1k:mt-20">
        <h1 className="text-2xl">Oops! Page Not Found</h1>
        <Image
          src="/404.svg"
          alt="404 Page Not Found"
          width={400}
          height={300}
        />
        <span className="text-gray-400 flex gap-1">
          Go back to
          <Link href="/">
            <div className="underline font-bold hover:text-gray500">
              home page?
            </div>
          </Link>
        </span>
      </div>
    </>
  );
};

export default NotFound;
