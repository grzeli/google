import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center mt-24'>
        <Image
          width={'300'}
          height={'100'}
          src={
            'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
          }
          alt={'google'}
        ></Image>
        <HomeSearch />
      </div>
    </>
  );
}
