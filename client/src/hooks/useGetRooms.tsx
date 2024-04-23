import { useEffect, useState } from 'react';

export interface RoomType {
   id: string;
   room_id: string;
   room_name: string;
}

const useGetRooms = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const [rooms, setRooms] = useState<RoomType[]>([]);

   useEffect(() => {
      (async () => {
         setLoading(true);
         try {
            const response = await fetch('http://localhost:4000/api/rooms/get');
            const getRooms = await response.json();
            setRooms(getRooms);
         } catch (error: any) {
            console.error(
               `something went wrong at getting rooms ${error.message}`
            );
         } finally {
            setLoading(false);
         }
      })();
   }, []);

   return { loading, rooms };
};

export default useGetRooms;
