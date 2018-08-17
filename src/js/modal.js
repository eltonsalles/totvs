$(function () {
    pagination();

    if (screen.width >= 1024) {
        callOpenAllModal();
    }
});

function callOpenAllModal() {
    modal('#call-open-all-modal', 'Chamados Abertos', null)
}

function modal(idBtnOpen, title, table, pagination) {
    var btnOpen = document.querySelector(idBtnOpen);

    var modal = document.querySelector('#call-table');
    var btnClose = modal.querySelector('.call-modal-close');

    // modal.querySelector('.modal-card-title').textContent = title;
    // modal.querySelector('.table').textContent = table;
    // modal.querySelector('.pagination').textContent = pagination;

    btnOpen.addEventListener('click', function () {
        modal.classList.add('is-active');
    });

    btnClose.addEventListener('click', function () {
        modal.classList.remove('is-active');
    });
}

function pagination() {
    $('#call').DataTable({
        lengthChange: false,
        info: false,
        pageLength: 2,
        pagingType: 'numbers'
    });

    var inputFilter = $('#call_filter').find('input');
    inputFilter.addClass('input');
    inputFilter.attr('placeholder', 'buscar');

    // closeModal();
}

// function closeModal() {
//     var btnClose = $('.call-modal-close');
//     btnClose.on('click', function () {
//         $('#call_filter input').val('');
//     });
// }
