import {Mapper} from "../../../../base/mapper";
import {UserEntity} from "../entities/user-entity";
import {UserModel} from "../../../../domain/models/user.model";

export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel>{

   mapFrom(param: UserEntity): UserModel {
     return {
       id: param.id,
       fullName: param.name,
       username: param.userName,
       phoneNum: param.phoneNumber,
       profilePicture: param.userPicture,
       activationStatus: param.activationStatus
     };
  }

   mapTo(param: UserModel): UserEntity {
     return {
       id: param.id,
       name: param.fullName,
       userName: param.username,
       phoneNumber: param.phoneNum,
       userPicture: param.profilePicture,
       activationStatus: param.activationStatus
     }
  }
}
