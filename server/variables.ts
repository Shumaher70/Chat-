import { userType } from './server.types';

interface Room {
   room: string;
}

export let chatRoom: Room = { room: '' };
export let allUsers: userType[] = [];
