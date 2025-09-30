'use client';

import { useEffect, useState } from 'react';
import { getTodos } from '@/app/actions';
import TodoItem from './TodoItem';
import { useAuth } from '@/lib/auth';
import { Timestamp } from 'firebase/firestore';

interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Timestamp;
  }

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
        getTodos(user.uid).then(todos => {
            setTodos(todos as Todo[]);
            setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="space-y-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
