# dsmovie</br>
Projeto criado na semana Spring React Devsuperior</br>
</br>
Esse projeto tem duas camadas.</br>
</br>
</br>
</br>
#frontend</br>
   -> Interface feita com React e BootStrap</br>
   -> https://eliasrlima-dsmovie.netlify.app/</br>
   *Por usar um site free, a REST API fica desativada apos 30 min sem uso, o que pode fazer com que nao carregue os filmes. Para resolver click no link de listar todos presente aqui abaixo na area de backend.</br>
</br>
</br>
#backend</br>
</br>
  -> API REST feita em Spring com banco de dados PostgreeSQL</br>
</br>
  LISTAR TODOS -> https://eliasrlima-dsmovie.herokuapp.com/movies</br>
  LISTAR FILME POR ID -> https://eliasrlima-dsmovie.herokuapp.com/movies/1 (no lugar de 1 passar o ID do filme)</br>
  
  Exemplo JSON Avaliacao:</br>
  {</br>
    "movieId": 1,</br>
    "email": "rodrigo@gmail.com",</br>
    "score": 5</br>
 }</br>
 SALVAR NOVA AVALIACAO -> (PUT) https://eliasrlima-dsmovie.herokuapp.com/scores </br>
 
