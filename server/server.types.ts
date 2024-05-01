export type userType = {
   [key: string]: string | number;
};

export type messageType = {
   user_id: string;
   room_id: string;
   message_text: string;
   name: string;
   avatar: string;
};

export type joinToRoom = {
   room_id: string;
   user: {
      user_id: string;
      name: string;
      avatar: string;
   };
};
