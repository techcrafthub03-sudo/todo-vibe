'use server';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, Timestamp, getDocs, query, where, orderBy } from 'firebase/firestore';

// Get user-specific todos
export async function getTodos(userId: string) {
    if (!userId) return [];
    const q = query(collection(db, `users/${userId}/todos`), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const todos = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return todos;
  }

// Add a todo for a specific user, preventing duplicates
export async function addTodo(userId: string, formData: FormData) {
  const title = formData.get('title') as string;
  if (!title || title.trim() === '' || !userId) return;

  const todosRef = collection(db, `users/${userId}/todos`);
  const q = query(todosRef, where("title", "==", title));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // A todo with the same title already exists.
    console.log("Duplicate todo found, not adding.");
    return;
  }


  await addDoc(todosRef, {
    title: title,
    completed: false,
    createdAt: Timestamp.now(),
  });

  revalidatePath('/');
}

// Toggle a todo for a specific user
export async function toggleTodo(userId: string, id: string, completed: boolean) {
    if (!userId) return;
  const taskDoc = doc(db, `users/${userId}/todos`, id);
  await updateDoc(taskDoc, {
    completed: !completed,
  });
  revalidatePath('/');
}

// Delete a todo for a specific user
export async function deleteTodo(userId: string, id: string) {
    if (!userId) return;
  const taskDoc = doc(db, `users/${userId}/todos`, id);
  await deleteDoc(taskDoc);
  revalidatePath('/');
}
