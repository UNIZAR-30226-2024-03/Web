/**
 * Obtiene los seguidores de un usuario autenticado haciendo una solicitud GET a la URL especificada.
 * @param jws El token JWT (JSON Web Token) para la autenticación.
 * @returns Una promesa que se resuelve con la respuesta de la solicitud GET, que contiene los datos de los seguidores.
 * @throws Error si ocurre un error durante la solicitud.
 */

import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function editUser(jws: string) {
    try {

        const response = await axios.put(Global.url + "usuario",{
            headers: {
                Authorization: `Bearer ${jws}`,
            },
            data: {
                nombreUsuario: "Lucas",
            }
        });

        return response;
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { editUser };
