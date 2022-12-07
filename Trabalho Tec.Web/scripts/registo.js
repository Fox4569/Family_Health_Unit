

  function registo(){
    var username = document.forms["form-registo"]["username"].value;
    var email = document.forms["form-registo"]["password"].value;
    var pass = document.forms["form-registo"]["email"].value;
    var name = document.forms["form-registo"]["name"].value;
    var surname = document.forms["form-registo"]["surname"].value;
     if( email=="" || username=="" || pass=="" || name=="" || surname==""){
        alert("Insira todos os dados");
    }
    else{
        alert("Utilizador: "+nome+"\nEmail: "+email+"\nCriado com sucesso!");
        window.location.href = "Login.html";
    }

}

