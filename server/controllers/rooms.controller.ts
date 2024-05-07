import { Request, Response } from 'express';
import { supabase } from '../utils/supabase';

export const getRoomsController = async (req: Request, res: Response) => {
   try {
      const { data, error } = await supabase.from('rooms').select();
      if (error) {
         console.error(`something went wrong with getting rooms from rooms `);
      }

      if (data?.length !== 0) {
         res.status(200).json(data);
      } else {
         console.error(`rooms are not exist`);
         res.status(401).json({ error });
      }
   } catch (error) {
      console.error(`error request to supabase rooms in server`);

      res.status(500).json({ error: error });
   }
};

export const getRoomController = async (req: Request, res: Response) => {
   const room_id = req.params.id;

   try {
      const { data, error } = await supabase
         .from('rooms')
         .select(
            `messages ( message_text, room_id , user_id,created_at,id,name,avatar)`
         )
         .eq('room_id', room_id);

      if (error) {
         console.error(
            `something went wrong with get data from database room ${error}`
         );
      }

      if (data) {
         const { messages } = data[0];
         res.status(200).json(messages);
      }
   } catch (error) {
      console.error(`error request to supabase rooms in server`);

      res.status(500).json({ error: error });
   }
};

export const createRoomController = async (req: Request, res: Response) => {
   const { room_id, room_name, user_id, room_label } = req.body.room;

   const { data } = await supabase
      .from('rooms')
      .select()
      .eq('room_name', room_name);
   if (data) {
      const roomExists = data.length > 0;

      if (!roomExists) {
         await supabase.from('rooms').insert({
            room_id,
            room_name,
            user_id,
            room_label,
         });

         return res.json({ error: false, message: null });
      }

      return res.json({ error: roomExists, message: 'Name already exists' });
   }

   try {
   } catch (error: any) {
      console.error(
         `something went wrong in rooms.controller ${error.message}`
      );
   }
};

export const deleteUserController = async (req: Request, res: Response) => {
   const { room_id, room_name, user_id, room_label } = req.body.room;

   try {
      const { data: removeMessage } = await supabase
         .from('messages')
         .delete()
         .eq('room_id', room_id);

      const { data: removeRoom } = await supabase
         .from('rooms')
         .delete()
         .eq('room_id', room_id);

      return res.json(true);
   } catch (error: any) {
      console.error(
         `something went wrong in rooms.controller when deleting a room ${error.message} `
      );
   }
};
