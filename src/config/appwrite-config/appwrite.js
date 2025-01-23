import { env } from '@/env';
import { Client, Storage } from 'appwrite';


export const client = new Client();
client
.setEndpoint(env.APPWRITE_URL)
.setProject(env.APPWRITE_PROJECT_ID);

export const storage = new Storage(client);