function semuaMerk() {
  $.getJSON("Data/gadget.json", function (data) {
    let merk = data.hp;
    $.each(merk, function (i, data) {
      $(".daftar-merk").append(
        '<div class="col-md-4"><div class="card mt-3"><img src="img/gadget/' +
          data.gambar +
          '"class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">Rp. ' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Lihat Detail</a></div></div></div>'
      );
    });
  });
}
semuaMerk();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
  let kategori = $(this).html();
  $("h1").html(kategori);

  $.getJSON("Data/gadget.json", function (data) {
    let merk = data.hp;
    let content = "";

    $.each(merk, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card mt-3"><img src="img/gadget/' +
          data.gambar +
          '"class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">Rp. ' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Lihat Detail</a></div></div></div>';
      }
    });
    if (kategori == "Semua Merk") {
      $(".daftar-merk").html("");
      semuaMerk();
    }
    $(".daftar-merk").html(content);
  });
});
// Live Search
$(document).ready(function () {
  $(".search").on("keyup", function () {
    $(".daftar-merk").html("");
    let searchField = $(".search").val();
    let expression = new RegExp(searchField, "i");

    $.getJSON("Data/gadget.json", function (data) {
      let merk = data.hp;

      $.each(merk, function (key, value) {
        if (
          value.nama.search(expression) != -1 ||
          value.deskripsi.search(expression) != -1
        ) {
          $(".daftar-merk").append(
            '<div class="col-md-4"><div class="card mt-3"><img src="img/gadget/' +
              value.gambar +
              '"class="card-img-top" /><div class="card-body"><h5 class="card-title">' +
              value.nama +
              '</h5><p class="card-text">' +
              value.deskripsi +
              '</p><h5 class="card-title">Rp. ' +
              value.harga +
              '</h5><a href="#" class="btn btn-primary">Lihat Detail</a></div></div></div>'
          );
        }
      });
    });
  });
});
