'use client';

import { useTransition } from 'react';
import { addTodo } from '@/app/actions';
import { Plus } from 'lucide-react';
import { useAuth } from '@/lib/auth';

export default function AddTask() {
  const [isPending, startTransition] = useTransition();
  const { user } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (user) {
      startTransition(() => addTodo(user.uid, formData));
    }
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full mb-4">
      <input
        type="text"
        name="title"
        placeholder="Add a new task..."
        className="flex-grow p-2 border rounded-l-md"
        required
      />
      <button type="submit" className="btn-primary rounded-l-none" disabled={isPending || !user}>
        {isPending ? 'Adding...' : <Plus />}
      </button>
    </form>
  );
}
