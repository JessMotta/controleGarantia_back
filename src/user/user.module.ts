import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { NameUniqueValidator } from "./validation/name-unique.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, NameUniqueValidator]
})
export class UserModule {}