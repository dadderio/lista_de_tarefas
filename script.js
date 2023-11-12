$("#btn").click(function(e){

  const tarefa = $("#tarefa").val();
    if(tarefa == ""){
      alert("Digite uma tarefa válida")
    } else {
      $("#lista").append(`<li>
                              <i class="fa-solid fa-square-check check"></i>
                              <span>${ tarefa }</span>
                              <i class="fa-solid fa-trash-can close"></i>
                          </li>`
      );
      $("#tarefa").val("");
    }

    $(".close").each(function(){
      $(this).click(function(){
        $(this).parent().remove();
      })
    });

    $("#lista li").click(function(){
      $(this).find(".check").css("color", "#349223");
      $(this).find("span").css("textDecoration", "line-through");
    })

})













/*
const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function(){
  if(tarefa.value == ""){
    alert("Digite uma tarefa válida !")
  } else {
    lista.innerHTML += `<li>
                            <i class="fa-solid fa-square-check check"></i>
                            <span>${tarefa.value}</span>
                            <i class="fa-solid fa-trash-can close"></i>
                        </li>`
  }
  tarefa.value="";

  const close = document.querySelectorAll(".close");
  for(let i = 0; i<close.length; i++){
    close[i].addEventListener("click", function(){
      close[i].parentElement.remove();
    })
  }
  
  lista.addEventListener("click", function(e){
    e.target.parentElement.querySelector(".check").style.color = "#349223";
    e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
  })

})
*/