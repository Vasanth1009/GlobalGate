import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-10">
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
