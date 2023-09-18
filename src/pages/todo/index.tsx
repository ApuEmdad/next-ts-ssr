import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';

import { IResponseTodo, ITodo } from '@/model/todo.model';

const Todos = (response: IResponseTodo) => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      {response && response.data.map((t: ITodo, i: number) => (
        <div key={i}>
          <p>
            <span>{t.title}</span>
            <span>({String(t.completed)})</span>
          </p>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Todos;

export const getServerSideProps: GetServerSideProps<{
  data: IResponseTodo
}> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return { props: { data } };
};
