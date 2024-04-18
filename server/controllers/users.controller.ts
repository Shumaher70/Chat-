import { userType } from './../server.types';
import { supabase } from './../utils/supabase';

import { Request, Response } from 'express';

export const postUserController = async (req: Request, res: Response) => {
   try {
      const { user_id, name, avatar } = req.body as userType;

      if (!user_id) {
         return res.status(400).json({ error: 'user_id not received' });
      }

      if (!name) {
         return res.status(400).json({ error: 'name not received' });
      }

      const { data: userExist } = await supabase
         .from('users')
         .select()
         .eq('user_id', user_id);

      if (userExist?.length === 0) {
         const { data: users } = await supabase
            .from('users')
            .insert({ user_id, name, avatar });

         res.status(200).json(users);
      }
   } catch (error) {
      return res.status(500).json({ error: error });
   }
};
