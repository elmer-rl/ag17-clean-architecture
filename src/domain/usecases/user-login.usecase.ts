import {UseCase} from "../../base/use-case";
import {UserModel} from "../models/user.model";
import {UserRepository} from "../repositories/user.repository";
import {Observable} from "rxjs";

export class UserLoginUsecase implements UseCase<{ username: string, password: string}, UserModel> {
    constructor(private userRepository: UserRepository) {
    }

    execute(
        params: { username: string; password: string }
    ): Observable<UserModel> {
        return this.userRepository.login(params);
    }
}
