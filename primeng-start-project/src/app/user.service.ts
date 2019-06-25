import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Usuario} from "./usuario";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.host.concat('usuario');

  constructor(private httpClient: HttpClient) { }

  public save(usuario:Usuario): Observable<any> {
    return this.httpClient.post<Usuario>(this.url, usuario);
  }

  public getUsers(): Observable<any>{
    return this.httpClient.get<Usuario[]>(this.url);
  }

  public deleteUser(id:string): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }

  public static buildUsuario(user:User): Usuario{
    let usuario = new Usuario();
    usuario.nome = user.name;
    usuario.email = user.email;
    return usuario;
  }

  public static buildUser(usuario:Usuario): User{
    let user = new User();
    user.id = usuario.id;
    user.name = usuario.nome;
    user.email = usuario.email;
    return user;
  }
}
