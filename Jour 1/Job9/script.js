function tri() { 

    let nombre = [3, 0, 2, 1, 6, 4, 5, 6, 8, 7, 9, 10, 12, 11];
    let order = {
        ASC : function(a, b) { return a - b; },
        DESC : function(a, b) { return b - a; }
    }
    
    console.log(nombre.sort(order.ASC));
    console.log(nombre.sort(order.DESC));
}

tri();


