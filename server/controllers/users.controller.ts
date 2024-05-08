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
      }

      const { data } = await supabase
         .from('users')
         .select()
         .eq('user_id', user_id);

      return res.status(200).json(data);
   } catch (error) {
      return res.status(500).json({ error: error });
   }
};

export const getUserController = async (req: Request, res: Response) => {
   const id = req.params.id;

   try {
      const { data, error } = await supabase
         .from('users')
         .select()
         .eq('user_id', id);

      if (data !== null && data.length > 0) {
         const user = data[0];

         return res.status(200).json(user);
      } else {
         return res.status(200).json(error);
      }
   } catch (error) {
      console.error(
         `something went wrong with supabase when getting "user" on server ${error}`
      );

      return res.status(500).json({ error: error });
   }
};

export const putUserController = async (req: Request, res: Response) => {
   const id = req.params.id;
   const { userName } = req.body;

   try {
      const { data, error } = await supabase
         .from('users')
         .update({ name: userName })
         .eq('user_id', id);

      await supabase
         .from('messages')
         .update({ name: userName })
         .eq('user_id', id);

      if (data !== null) {
         const user = data[0];
         return res.status(200).json(user);
      } else {
         return res.status(200).json(error);
      }
   } catch (error) {
      console.error(
         `something went wrong with supabase try updating "user" on server ${error}`
      );

      return res.status(500).json({ error: error });
   }
};
