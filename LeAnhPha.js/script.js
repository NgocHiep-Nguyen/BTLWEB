
function showContent(id) {
    // Lấy các phần tử nội dung
    var docnhieu = document.querySelector('.docnhieu');
    var binhluannhieu = document.querySelector('.binhluannhieu');

    // Lấy tất cả tiêu đề trong menu
    var headers = document.querySelectorAll('.evaluate-menu li h3');

    // Đặt lại lớp cho tất cả tiêu đề để chắc chắn chỉ tiêu đề được chọn mới có màu xanh
    headers.forEach(function(header) {
        header.classList.remove('active');
    });

    // Cập nhật lớp cho tiêu đề được chọn
    headers[id].classList.add('active');

    // Chuyển đổi nội dung dựa trên id
    if (id === 0) {
        docnhieu.classList.add('active');
        docnhieu.classList.remove('hidden');
        binhluannhieu.classList.add('hidden');
        binhluannhieu.classList.remove('active');
    } else {
        binhluannhieu.classList.add('active');
        binhluannhieu.classList.remove('hidden');
        docnhieu.classList.add('hidden');
        docnhieu.classList.remove('active');
    }
}
