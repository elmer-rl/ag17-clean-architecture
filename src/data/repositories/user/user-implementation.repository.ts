import { Injectable } from '@angular/core';
import {UserRepository} from "../../../domain/repositories/user.repository";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserModel} from "../../../domain/models/user.model";
import {UserEntity} from "./entities/user-entity";
import {environment} from "../../../environments/environment";
import {UserImplementationRepositoryMapper} from "./mappers/user-repository.mapper";
@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

  urlBase = environment.urlApi;
  urlLogin = this.urlBase + 'user/login';
  urlRegister = this.urlBase + 'user/register';
  urlGetProfile = this.urlBase + 'user/profile';
  headers = new HttpHeaders();

  userMapper = new UserImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
      super();
  }

     login(params: { username: string; password: string }): Observable<UserModel> {
        return this.http.post<UserEntity>(this.urlLogin, {params}, { headers: this.headers})
            .pipe(map(this.userMapper.mapFrom));
    }

     register(params: { phoneNum: string; password: string }): Observable<UserModel> {
        return this.http.post<UserEntity>(this.urlRegister, {params}, { headers: this.headers})
            .pipe(map(this.userMapper.mapFrom));
    }
     getUserProfile(): Observable<UserModel> {
        return this.http.get<UserEntity>(this.urlGetProfile, { headers: this.headers})
            .pipe(map(this.userMapper.mapFrom));
    }
}
