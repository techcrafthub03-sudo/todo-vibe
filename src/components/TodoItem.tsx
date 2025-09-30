'use client';

import { toggleTodo, deleteTodo } from '@/app/actions';
import { Trash2 } from 'lucide-react';
import { useTransition } from 'react';
import { useAuth } from '@/lib/auth';
import { Timestamp } from 'firebase/firestore';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Timestamp;
}

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();
  const { user } = useAuth();

  const handleToggle = () => {
    if (user) {
      startTransition(() => toggleTodo(user.uid, todo.id, todo.completed));
    }
  };

  const handleDelete = () => {
    if (user) {
      startTransition(() => deleteTodo(user.uid, todo.id));
    }
  };

  return (
    <li className="todo-item group">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="checkbox-custom"
          disabled={isPending || !user}
        />
        <span className={`ml-4 text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.title}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
        disabled={isPending || !user}
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </li>
  );
}
