let FETCH = async() =>{
    let api = await fetch('https://fakestoreapi.com/products')
    let data = await api.json()
    
    let output = ""
    data.forEach((value,index) =>{
        output+='<p>'+value.title+'</p><br><p>'+value.price+'</p><br><img src="'+value.image+'"/>'
    })
    document.getElementById('showoutput').innerHTML=output;
}

 