'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import AddTask from '@/components/AddTask';
import TodoList from '@/components/TodoList';
import Loading from './loading';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <main>
      <AddTask />
      <TodoList />
    </main>
  );
}
