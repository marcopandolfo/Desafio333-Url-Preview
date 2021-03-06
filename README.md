
<h1 align="center"> Desafio333-Url-Preview</h1>

<h3 align="center">
  <img src="https://avatars1.githubusercontent.com/u/50280477?s=200&v=4" width="125"><br>
    <a href="https://github.com/codigofalado/desafio333">Código Falado</a>
    <br>
    <br>
</h3>

# Sobre o projeto
O Projeto faz parte de um <a href="">desafio</a> da comunidade <a href="https://github.com/codigofalado/desafio333">Código Falado</a> onde o projeto é criar uma API que, dada uma url, ela tem que retornar o máximo de informações possíveis sobre aquela url.

# Sobre a API
A API atualmente está hospedada na heroku e você pode testar o projeto usando a url `http://urlpreview.herokuapp.com/`

Basta apenas fazer um POST nessa url passando como body param a `url` que você deseja extrair os dados

##### Exemplo
```
{
  "url": "https://github.com/codigofalado/"
}
```

E a partir disso, a api irá retonar um JSON contendo as informções daquela URL.

##### Exemplo
```
{
  "url": "https://github.com/codigofalado",
  "source": "github.com",
  "title": "Código Falado",
  "type": "profile",
  "description": "A comunidade de Live Coding onde aprendemos juntos! - Código Falado",
  "domain": "github.com",
  "thumbnail": "https://avatars0.githubusercontent.com/u/50280477?s=280&v=4",
  "sitename": "GitHub"
}
```

# Sobre o frontend
O projeto conta com uma interface web feita em React consumindo a API do projeto, que possui 2 modos de visualização (raw json e um modo mais visivel das informações)

Você pode testar agora mesmo em

https://url-preview.netlify.com/

![image](https://user-images.githubusercontent.com/40467826/67532594-328e5d80-f69d-11e9-931e-4ef2cc47b8d6.png)

![image](https://user-images.githubusercontent.com/40467826/67532630-5487e000-f69d-11e9-9d77-acafbed73dfe.png)

<div align="center">
  <img src="https://cdn.discordapp.com/attachments/553858177331101696/611775488825753610/logo.png" alt="He4rt Developers" />

  Conheça a comunidade He4rt Developers, que tem como objetivo disponibilizar a troca de conhecimentos entre desenvolvedores,   majoritariamente brasileiros, para que possam crescer juntos como profissionais na área.
  <br>
  <div align="center">
      <a href="https://discord.gg/J3saJqq" target="_blank">
      <img src="https://discordapp.com/api/guilds/452926217558163456/embed.png" alt="Discord server"/></a>
  </div>
</div>
