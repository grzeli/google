import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image
          width={'290'}
          height={'100'}
          src={'/home_page_logo.png'}
          alt={'google'}
          className='rounded-3xl shadow-xl object-contain'
        ></Image>
        <HomeSearch />
      </div>
    </>
  );
}
