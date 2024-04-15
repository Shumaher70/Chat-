export type roomType = {
   room: string;
   userName: string;
   avatar_url: string;
   userId: string;
};

export type allUserType = {
   id: string;
   room: string;
   userName: string;
   avatar_url: string;
};

export type messageType = {
   id: string;
   room: string;
   userName: string;
   avatar_url: string;
   message: string;
   atData: string;
};
