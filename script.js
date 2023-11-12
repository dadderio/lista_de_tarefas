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

