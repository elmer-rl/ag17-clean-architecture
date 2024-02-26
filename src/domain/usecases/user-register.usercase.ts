import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../models/user.model";
import {UseCase} from "../../base/use-case";
import {Observable} from "rxjs";

export class UserRegisterUsercase implements UseCase<{phoneNum: string, password: string} , UserModel> {

    constructor(private userRepository: UserRepository) {
    }

    execute(params: { phoneNum: string; password: string }): Observable<UserModel> {
        return this.userRepository.register(params);
    }

}
