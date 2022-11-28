import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faGears} from '@fortawesome/free-solid-svg-icons';
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import {faDiagramProject} from '@fortawesome/free-solid-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import {faUserSlash } from '@fortawesome/free-solid-svg-icons';
import {LoginUsuario } from './models/login-usuario';
import {AuthService } from './servicios/auth.service';
import {TokenService } from './servicios/token.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faHome = faHome;
  faGears = faGears;
  faAddressCard = faAddressCard;
  faBuildingColumns = faBuildingColumns;
  faDiagramProject = faDiagramProject;
  faAt = faAt;
  faLinkedinIn = faLinkedinIn;
  faBars = faBars;
  faPen = faPen;
  faUser = faUser;
  faArrowRightToBracket = faArrowRightToBracket;
  faUserSlash = faUserSlash

  isLogged = false;
  isloggingFail = true;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  

  constructor(private router:Router, private tokenService: TokenService, private authService: AuthService){}

  ngOninit():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  public irA():void {
    alert("Para editar debes loguearte")
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService
      .login(this.loginUsuario).subscribe( data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
        this.isLogged = true;
        this.isloggingFail = false;
      }, error =>{
        this.isLogged= false;
        this.isloggingFail = true;
        this.errMsj = error.error.mensaje;
      
      })
  }

  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/paginas/login']);
    this.isLogged = true;
  }
}
