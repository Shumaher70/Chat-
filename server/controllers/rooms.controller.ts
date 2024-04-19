import { Request, Response } from 'express';
import { supabase } from '../utils/supabase';

export const getRoomController = async (req: Request, res: Response) => {
   try {
      const { data, error } = await supabase.from('rooms').select();
      if (!data) {
         throw new Error(
            'something went wrong with get data from database rooms'
         );
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
