import { writable } from 'svelte/store';
interface AuthUser {
  uid: string;
}

const authUser = writable<AuthUser | undefined>(undefined);

export { authUser };
