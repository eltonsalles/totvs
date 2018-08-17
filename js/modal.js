$(function () {
    pagination();
});

function pagination() {
    $('#call').DataTable({
        lengthChange: false,
        info: false,
        pageLength: 2,
        pagingType: 'numbers'
    });

    let inputFilter = $('#call_filter').find('input');
    inputFilter.addClass('input');
    inputFilter.attr('placeholder', 'buscar');

    // closeModal();
}

function closeModal() {
    let btnClose = $('.call-modal-close');
    btnClose.on('click', function () {
        $('#call_filter input').val('');
    });
}
