import { LightningElement } from "lwc";

export default class App extends LightningElement {
nome = {
  nome: "",
 cpf:"",
 telefone:"",
 email:"",
};
 /*
handleOnChangenome(event){
this.nome = event.detail.value;
console.log('nome' + this.nome);
}
handleOnChangeCpf(event){
this.cpf = event.detail.value;
console.log('cpf' + this.cpf);
}
handleOnChangeTelefone(event){
this.telefone = event.detail.value;
console.log('Telefone' + this.telefone);
}
handleOnChangemail(event){
this.email = event.detail.value;
console.log('email' + this.email);
}
*/
// handleInputChange

handleInputChange(event){
//console.log("Valor do campo" + event.detail.value);

// recurperar o nomrecupere do campo que esta sendo chamado
//console.log("name " + event. target. name);

let name = event.target.name;
let value = event.detail.value;
/**
 * > operador spread(..)
 */


this. name = {
  ...this.name, [name]:value
  };
console.log(this.name);
}


}
