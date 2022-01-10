const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, hasta = 10, listar = false, ) => {
    try {
             
        let salida = "";
        

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            
        }

        if (listar) {
            console.log('====================' .green);
            console.log( 'Tabla del: '.green, colors.blue(base)  );
            console.log('====================' .green);    
            console.log(salida .yellow);
        }
            
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt creado` .rainbow);
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}