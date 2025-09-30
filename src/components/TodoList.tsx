'use client';

import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import TodoItem from './TodoItem';
import { useAuth } from '@/lib/auth';

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
        // The path to the user's specific todo collection
        const collectionPath = `users/${user.uid}/todos`;
        
        // A query to get the todos and order them by creation date
        const q = query(collection(db, collectionPath), orderBy('createdAt', 'desc'));

        // onSnapshot creates the real-time listener
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const todosArray: Todo[] = [];
            querySnapshot.forEach((doc) => {
                // Important: include the document ID!
                todosArray.push({ id: doc.id, ...doc.data() } as Todo);
            });

            setTodos(todosArray);
            setLoading(false);
        }, (error) => {
            console.error("Error listening to todos: ", error);
            setLoading(false);
        });

        // This function is called when the component unmounts.
        // It's crucial for preventing memory leaks.
        return () => unsubscribe();

    } else {
        // If there's no user, clear the todos and stop loading.
        setTodos([]);
        setLoading(false);
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
