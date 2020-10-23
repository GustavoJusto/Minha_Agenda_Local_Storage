// This is a JavaScript file
$contador = 1;

$(document).on("click","#add",function()
{
  $telefone = $("#nt").val();

  localStorage.setItem("Telefone_"+$contador,$telefone);
  $contador++;
});
