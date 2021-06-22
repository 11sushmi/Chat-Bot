import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { BcryptHelper } from "../helper/security/bcrypt.helper";
import { ChakraBotUtils } from "../helper/utils/chatBotUtils";
const bcryptHelper = new BcryptHelper();

export class UserController {

   private userRepository = getRepository(User);


   async userList(request: Request, response: Response, next: NextFunction) {
      return this.userRepository.find();
   }

   async one(request: Request, response: Response, next: NextFunction) {
      return this.userRepository.findOne(request.params.id);
   }

   async save(request: Request, response: Response, next: NextFunction) {
      return this.userRepository.save(request.body);
   }

   async remove(request: Request, response: Response, next: NextFunction) {
      let userToRemove = await this.userRepository.findOne(request.params.id);
      await this.userRepository.remove(userToRemove);
   }

   async login(request: Request, response: Response, next: NextFunction) {
      const result: any = await this.userRepository.find( { "where": { email: request.body.email, password: request.body.password } });
      return result;

      // const isMigratedPasswordValid = await bcryptHelper.verifyBcryptHash(request.body.password, userResult.password);

   }

   async createUser(request: Request, response: Response, next: NextFunction) {
      // console.log(request.body.password);
      // const password = await bcryptHelper.createBcryptHash(request.body.password);
      // console.log(password);
      // request.body.password = password;
      request.body.userId = ChakraBotUtils.getUUID();
      return this.userRepository.save(request.body);
   }

}
