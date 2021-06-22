import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Chat } from "../entity/chat.entity";


export class ChatController {

    async  getChatList(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Chat);

        // load a post by a given post id
        const posts = await postRepository.find();

        // return loaded posts
        response.send(posts);
    }

}