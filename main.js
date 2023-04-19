
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const NomeDaTarefa = $('#nome-da-tarefa').val();
        const NovoItem = $(`<li>${NomeDaTarefa}</li>`);
        $(NovoItem).appendTo('ul');
        
        $('li').click(function() {
            $(this).css("text-decoration","line-through");
            })
            
        }) 
        
    })
