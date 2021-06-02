/*Ser autenticável é ter o método autenticar
 Ducky typing - não importa o tipo , interessa os métodos ou propriedades em comum
*/
export class SistemaAutenticacao{
  static login(autenticavel, senha){
      if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
          return autenticavel.autenticar(senha);
      }
      return false;
  }

  static ehAutenticavel(autenticavel){
     return "autenticar" in autenticavel && 
     autenticavel.autenticar instanceof Function
  }
}