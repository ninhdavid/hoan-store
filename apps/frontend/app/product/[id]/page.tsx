import Link from 'next/link';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface pageProps {}

// eslint-disable-next-line no-empty-pattern
const page: FC<pageProps> = ({}) => {
    return (
        <div className="h-[1000px] w-full relative bg-black">
            id
            <Link href="/" className="text-green-400 absolute top-[50%] left-0">
                go to home
            </Link>
        </div>
    );
};

export default page;
