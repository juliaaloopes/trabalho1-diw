const URL_BASE = 'https://api.github.com/users/';
const SEARCH_REPO_BASE = 'https://api.github.com/search/repositories?q=';
var user;


function repositorios() {
    fetch(URL_BASE + 'juliaaloopes/repos')
    .then((response) => response.json())
    .then((repos) => {
        console.log(typeof repos);
        $.map((repos), (key) => {
            var test = document.getElementById("outerCard");

            test.innerHTML +=
            `
                <div class="col-12 col-md-6 col-lg-6 ">
                    <div class="row card m-2" id="">
                        <div class="row">
                            <div class="col-1 d-flex align-items-center m-2">
                                <i class="far fa-folder fa-lg"></i>
                            </div>
                            <div class="col mt-2">
                                <h2>` + key.name + `</h2>
                            </div>
                        </div>
                        <p> Descrição: ` + key.description + `</p>
                        <button><a href="` + key.svn_url + `" target="_blank">Link</a></button>
                    </div>
                </div>
            `;
        })
    });
}

$('document').ready(() => {

    function usuario(user) {
        fetch(URL_BASE + user)
        .then((response) => response.json())
        .then((usuario) => {
                
                var test = document.getElementById("git-user");

                test.innerHTML += 
                `
                <div class="col text-center mt-3" id="user">
                    <a href="https://github.com/` + usuario.login + `" target="_blank"><h2> ` + usuario.login + `</h2></a>
                    <a href="https://github.com/juliaaloopes?tab=followers" target="_blank"><h2>Seguidores: ` + usuario.followers + `</h2></a>
                    <a href="https://github.com/juliaaloopes?tab=following" target="_blank"><h2>Seguindo: ` + usuario.following + `</h2></a>
                </div>
                <div class="col text-center mt-3">
                    <img src="` + usuario.avatar_url + `" width="250px" height="250px" style="border-radius: 50%">
                </div>
                `;

        });
    };

     $("#pesquisa").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#outerCard .card").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    usuario('juliaaloopes');
    
    repositorios();
});
