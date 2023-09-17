import { useRouter } from 'next/router';
import Image from 'next/image';
import { GetServerSideProps } from 'next/types';

import { IPhoto, IResponsePhoto } from '@/model/photo.model';

const Todo = (response: IResponsePhoto) => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      <br />
      {response.data ? (
        response.data.map((d: IPhoto, i: number) => (
          <div key={i}>
            <p>{d?.title}</p>
            <Image src={d?.thumbnailUrl} loading='lazy' alt={''} width={100} height={100} />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Todo;

export const getServerSideProps: GetServerSideProps<{
  data: IResponsePhoto
}> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  return { props: { data } };
};
