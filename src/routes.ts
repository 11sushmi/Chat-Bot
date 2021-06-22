
import { ChatController } from "./controller.ts/chat.controller";
import { UserController } from "./controller.ts/user.controller";


export const Routes = [{
    method: "get",
    route: "/users/user-list",
    controller: UserController,
    action: "userList"
}, {
    method: "post",
    route: "/users/user-login",
    controller: UserController,
    action: "login"
},

{
    method: "post",
    route: "/users/create-user",
    controller: UserController,
    action: "createUser"
},

{
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];