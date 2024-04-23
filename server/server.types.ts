export type userType = {
   [key: string]: string | number;
};

export type messageType = {
   user_id: string;
   message: string;
   room: string;
};

export type joinToRoom = {
   room_id: string;
   user: {
      user_id: string;
      name: string;
      avatar: string;
   };
};
