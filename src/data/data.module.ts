import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserRepository} from "../domain/repositories/user.repository";
import {UserLoginUsecase} from "../domain/usecases/user-login.usecase";
import {UserRegisterUsercase} from "../domain/usecases/user-register.usercase";
import {GetUserProfileUsercase} from "../domain/usecases/get-user-profile.usercase";
import {UserImplementationRepository} from "./repositories/user/user-implementation.repository";

const userLoginUseCaseFactory = (userRepo: UserRepository) => new UserLoginUsecase(userRepo);
export const userLoginUseCaseProvider = {
  provide: UserLoginUsecase,
  useFactory: userLoginUseCaseFactory,
  deps: [UserRepository]
}

const userRegisterUseCaseFactory = (userRepo: UserRepository) => new UserRegisterUsercase(userRepo);
export const userRegisterUseCaseProvider = {
  provide: UserRegisterUsercase,
  useFactory: userRegisterUseCaseFactory,
  deps: [UserRepository]
}

const getUserProfileUseCaseFactory = (userRepo: UserRepository) => new GetUserProfileUsercase(userRepo);
export const getUserProfileUseCaseProvider = {
  provide: GetUserProfileUsercase,
  useFactory: getUserProfileUseCaseFactory,
  deps: [UserRepository]
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    userLoginUseCaseProvider,
    userRegisterUseCaseProvider,
    getUserProfileUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ]
})
export class DataModule { }
