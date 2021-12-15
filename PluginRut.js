
class Rut{
    /**
     * @param {number} username The username without format
     * @param {boolean} isFormated Is the rut formated?
     * @param {boolean} hasDV Has the rut a DV?
     */
    constructor(username, isFormated, hasDV){
        username    = username.toString();
        username    = isFormated ? username.replace(/[\.\-]/g, "") : username;
  
          if( hasDV ){
              this._username      = username.substr(0, username.length - 1);
              this._verificator   = username.charAt(username.length - 1);
          
          }else{
              this._username      = username;
              this._verificator   = '';
  
          }
    }
  
    set username(value){
        this._username   = value;
    }
  
    set rut(value){
        this._rut    = value;
    }
  
    set verificator(value){
        this._verificator   = value;
    }
  
    get username(){
        return this._username;
    }
  
    get rut(){
        return this._rut;
    }
  
    get verificator(){
        return this._verificator;
    }
  
  
  
  
  
  
  
  
  
  
  
    /**
     * @param {string} id : Id of the input to set the rut. In other case put "" 
     */
    format(id){
        let chars  = this.username.split("");
  
        switch(chars.length){
            case 7:
                this._rut = chars[0] + "." + chars[1] + chars[2] + chars[3] + "." + chars[4] + chars[5] +
                        chars[6] + "-" + this.verificator;
                break;
  
            case 8:
                this._rut = chars[0] + chars[1] + "." + chars[2] + chars[3] + chars[4] + "." + chars[5] +
                        chars[6] + chars[7] + "-" + this.verificator;
                break;
  
            default:
                if(id != ""){ document.getElementById(id).value   = "" };
                
                this._username      = "";
                this._verificator   = "";
                this._rut           = "";
  
                break;
        }
    }
  
    isValid(id){
        var regex   = /([1-9]{1})([0-9]{0,1})\.([0-9]{3})\.([0-9]{3})\-((K|k|[0-9])){1}$/g;
  
        if( !regex.test( this.rut )){ 
            document.getElementById(id).value   = "";
            return false
        }
  
        if( computeDv( parseInt(this.username) ).toString().toUpperCase() === this.verificator.toUpperCase() ){
            document.getElementById(id).value   = this.rut;
            return true;
            
        }else{
            document.getElementById(id).value   = "";
            return false;
        }
  
        function computeDv(value){
            var suma	= 0;
            var mul		= 2;
            
            if(typeof(value) !== 'number') { return ""; }
            
            value = value.toString();
            
            for(var i=value.length -1; i >= 0; i--) {
                suma = suma + value.charAt(i) * mul;
                mul = ( mul + 1 ) % 8 || 2;
            }
            
            switch(suma % 11) {
                case 1	: return 'k';
                case 0	: return 0;
                default	: return 11 - (suma % 11);
            }
        }
    }
  
    computeDv(value){
      var suma	= 0;
      var mul		= 2;
      
      if(typeof(value) !== 'number') { return ""; }
      
      value = value.toString();
      
      for(var i=value.length -1; i >= 0; i--) {
          suma = suma + value.charAt(i) * mul;
          mul = ( mul + 1 ) % 8 || 2;
      }
      
      switch(suma % 11) {
          case 1	: return 'k';
          case 0	: return 0;
          default	: return 11 - (suma % 11);
      }
    }
  
    generateRut(){
        this.username       = this.username + this.verificator;
        this.verificator    = this.computeDv(parseInt(this.username)).toString().toUpperCase();
  
        this.format("");
    }
  }
  
  $(document).ready(function(){
        let id  = 'rut';
    
        $( eval("'#" + id + "'") ).change( function(e){
            try{ delete(rut); }catch(error){ console.log('Error to delete the variable Rut'); }
            
            let rut = new Rut(this.value, false, true);
            rut.format(id);
        
            if( !rut.isValid(id) ){
                swal("Error!", "El rut ingresado no es válido!", "error");
                delete rut;
            };
        });
  });

  function AssingRut(){
      let id  = 'rut';
  
      $( eval("'#" + id + "'") ).change( function(e){
          try{ delete(rut); }catch(error){ console.log('Error to delete the variable Rut'); }
          
          let rut = new Rut(this.value, false, true);
          rut.format(id);
      
          if( !rut.isValid(id) ){
              swal("Error!", "El rut ingresado no es válido!", "error");
              delete rut;
          };
      });
  }