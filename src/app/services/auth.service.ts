export class AuthService{
    loggedIn: boolean = false;

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }

    isAuthenticate() {
        return this.loggedIn;
    }


}