const funcs = []
for(let a = 0; a < 10; a++){
    funcs.push(function(){
        console.log(a);
    })
}

funcs[2]()
funcs[8]()

// fazendo o mesmo sistemas com a variavel var
// com isso podemos observar que....

const func = []

for(var b = 0; b < 10; b++){
    func.push(function(){
        console.log(b);
    })
}

func[2]()
func[8]()