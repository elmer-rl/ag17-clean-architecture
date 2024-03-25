import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import {UserRepository} from "../domain/repositories/user.repository";
import {UserLoginUsecase} from "../domain/usecases/user-login.usecase";
import {UserRegisterUsercase} from "../domain/usecases/user-register.usercase";
import {GetUserProfileUsercase} from "../domain/usecases/get-user-profile.usercase";
import {UserImplementationRepository} from "./repositories/user/user-implementation.repository";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
  ],
  providers: [
    { provide: UserLoginUsecase, useFactory: (userRepo: UserRepository) => new UserLoginUsecase(userRepo), deps: [UserRepository] },
    { provide: UserRegisterUsercase, useFactory: (userRepo: UserRepository) => new UserRegisterUsercase(userRepo), deps: [UserRepository] },
    { provide: GetUserProfileUsercase, useFactory: (userRepo: UserRepository) => new GetUserProfileUsercase(userRepo), deps: [UserRepository] },
    { provide: UserRepository, useClass: UserImplementationRepository }
  ]
})
export class DataModule { }
