import { Request, Response } from 'express';
import { supabase } from '../utils/supabase';

export const postMessageController = async (req: Request, res: Response) => {
   const { room_id, user_id, message_text, name, avatar } = req.body;

   try {
      if (!room_id) {
         throw new Error(
            'something went wrong when get "room_id" from user in postMessageController'
         );
      }
      if (!user_id) {
         throw new Error(
            'something went wrong when get "user_id" from user in postMessageController'
         );
      }

      await supabase.from('messages').insert({
         room_id,
         user_id,
         message_text,
         name,
         avatar,
      });

      const { data } = await supabase.from('messages').select();

      res.status(200).json(data);
   } catch (error) {
      console.error('Error in postMessageController:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
   }
};
