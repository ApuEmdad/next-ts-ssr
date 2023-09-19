import { useRouter } from 'next/router';
import Image from 'next/image';
import { GetServerSideProps } from 'next/types';

import { IPhoto, IResponsePhoto } from 'qf/model/photo.model';

const Todo = (response: IResponsePhoto | any) => {
  const router = useRouter();
  const photos = response.data.photos
  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      <br />
      {/* {response.data ? (
        response.data.map((d: IPhoto, i: number) => (
          <div key={i}>
            <p>{d?.title}</p>
            <Image src={d?.thumbnailUrl} loading='lazy' alt={''} width={100} height={100} />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )} */}
      {
        photos.map((photo: any, i: number) => (
          <div key={i}>
            <p>{photo?.title}</p>
            <Image src={photo?.url} loading='lazy' alt={''} width={100} height={100} />
          </div>
        ))
      }

    </div>
  );
};

export default Todo;

export const getServerSideProps: GetServerSideProps<{
  data: IResponsePhoto
}> = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10');
  const data = await res.json();
  return { props: { data } };
};
