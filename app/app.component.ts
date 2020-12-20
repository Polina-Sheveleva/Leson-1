import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    templateUrl: `./app.component.html`
})
export class AppComponent { 
    name:string="Tom";
    age:number = 16;
    clicks:number = 0;
    setName(){
       if (this.name==="Polina") {
        this.name="Sheveleva";   
       } else {
        this.name="Polina"}
    }

    onChanged(increased:boolean){
        if (increased === true){
            this.clicks++;this.age++
        } else {this.clicks--;this.age--}
    }
}