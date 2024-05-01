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
         console.log(`rooms are not exist`);
         res.status(401).json({ error });
      }
   } catch (error) {
      console.log(`error request to supabase rooms in server`);

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
      console.log(`error request to supabase rooms in server`);

      res.status(500).json({ error: error });
   }
};
