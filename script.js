
document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Cadastro enviado com sucesso!");
        });
    }

   
    const comentarioForm = document.getElementById('comentarios-form');
    const comentariosLista = document.getElementById('comentarios-lista');

    if (comentarioForm) {
        comentarioForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('nome-comentario').value;
            const comentario = document.getElementById('comentario').value;
            
            if (nome && comentario) {
                const novoComentario = document.createElement('li');
                novoComentario.textContent = `"${comentario}" - ${nome}`;
                comentariosLista.appendChild(novoComentario);
                
               
                comentarioForm.reset();
                alert("Obrigado pelo seu comentário!");
            } else {
                alert("Por favor, preencha todos os campos!");
            }
        });
    }
});
