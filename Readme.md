* Autor / Author
    Felipe Leiva Cortés


* Resumen / Abstract
    El "Plugin Rut" es una libreria open source que te permite generar y verificar
    el rut de tus clientes, facilitando en gran medida todo el codigo requerido para
    verificar la legitimidad de este.

    The "Plugin Rut" is an open source´s script that allow you to generate and check the client´s rut (role unique tributary),
    making easilier your work.


* Versión / Version
    1.3


* Uso / Usage
    -> Caso 1
        Al importar esta libreria, el script asignará evento de cambio automáticamente al input que tenga id="rut".
    
    
    Aquí, 
    var rut_clear   = 13000999      // Rut sin formatos, ni digito verificador
    var rut_full    = 13.000.999-7  // Rut con formato y digito verificador 
    var rut         = new Rut();

* Actualizaciones / Updates
    1.0 Versión Inicial | Init Version
    1.1 Corrección de errores | Fixed Bugs
    1.2 Traducido para IE | Translated to IE
    1.3 Modificado para aceptar SweetAlert2 | Updated to accept SweetAlert2