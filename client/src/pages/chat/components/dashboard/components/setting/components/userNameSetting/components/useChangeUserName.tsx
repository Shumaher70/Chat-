import { useState } from 'react';

export const handleChangeUserName = async (
   id: string,
   userName: string,
   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
   setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
   setError: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
   setLoading(true);

   try {
      const response = await fetch(
         `http://localhost:4000/api/users/updateuser/${id}`,
         {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName }),
         }
      );

      if (!response.ok) {
         throw new Error('Failed to update user name');
      }
      setSuccess(true);

      return await response.json();
   } catch (error) {
      setError(true);
      console.error(`Something went wrong when updating ${userName}`, error);
   } finally {
      setLoading(false);
   }
};

const useChangeUserName = (id: string, userName: string) => {
   const [loading, setLoading] = useState<boolean>(false);
   const [success, setSuccess] = useState<boolean>(false);
   const [error, setError] = useState<boolean>(false);

   const changeName = async () => {
      handleChangeUserName(id, userName, setLoading, setSuccess, setError);
   };

   return { changeName, loading, success, error };
};

export default useChangeUserName;
