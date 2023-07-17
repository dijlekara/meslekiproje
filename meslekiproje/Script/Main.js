
//KATEGORİ İŞLEMLERİ

$(document).on("click", "#ktgEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Ekle',
        html:
            '<input id="ktgAd" class="swal2-input">'
    })

    if (formValues) {
        var ktgAd = $("#ktgAd").val();
        $.ajax({
            type: 'Post',
            url: '/Kategori/EkleJson',
            data: { "ktgAd": ktgAd },
            dataType: 'Json',
            success: function (data) {
                var ktgId = data.Result.Id ;
                var ktgAd = '<td>' + data.Result.Ad + '</td>';
                var guncelleButon = "<td><button class='guncelle btn btn-custom' value='" + ktgId + " '>Güncelle</button></td>";
                var silButon = "<td><button class='sil btn btn-danger' value='" + ktgId + " '>Sil</button></td>";
                var kitapAdet = "<td>0</td>";
                $("#example tbody").prepend('<tr>' + ktgAd + kitapAdet + guncelleButon + silButon+'</tr>');
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Eklendi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
        });
    }
});
$(document).on("click", ".guncelle", async function () {
    var ktgId = $(this).val();
    var ktgAdTd = $(this).parent("td").parent("tr").find("td:first");
    var ktgAd = ktgAdTd.html();
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Güncelle',
        html:
            '<input id="ktgAd" value="' + ktgAd + '" class="swal2-input">'
    })
    ktgAd = $("#ktgAd").val();
    
        $.ajax({
            type: 'Post',
            url: '/Kategori/GuncelleJson',
            data: { "ktgId": ktgId ,"ktgAd": ktgAd },
            dataType: 'Json',
            success: function (data) {
                if (data == "1") {
                    ktgAdTd.html(ktgAd)
                    Swal.fire({
                        type: 'success',
                        title: 'Kategori Güncellendi',
                        text: 'İşlem Başarıyla Gerçekleşti !'
                    });
                }
                else {
                    Swal.fire({
                        type: 'error',
                        title: 'Kategori Güncellenmedi',
                        text: 'Bir Sorun İle Karşılaşıldı!'
                    });
                }
            }
        });   
});
$(document).on("click", ".sil", async function () {
    var tr = $(this).parent("td").parent("tr");
    var ktgId = $(this).val();
    $.ajax({
        type: 'Post',
        url: '/Kategori/SilJson',
        data: { "ktgId": ktgId },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Silindi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Kategori Silinmedi',
                    text: 'Bir Sorun İle Karşılaşıldı!'
                });
            }
        }
    });
});



//YAZAR İŞLEMLERİ

$(document).on("click", "#yazarEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Yazar Ekle',
        html:
            '<input id="yzrMyProperty" class="swal2-input">'
    })
    if (formValues) {
        var yzrMyProperty = $("#yzrMyProperty").val();
        $.ajax({
            type: 'Post',
            url: '/Yazar/EkleJson',
            data: { "yzrMyProperty": yzrMyProperty },
            dataType: 'Json',
            success: function (data) {
                var yzrId = data.Result.Id;
                var yzrMyProperty = '<td>' + data.Result.Ad + '</td>';
                var guncelleButon = "<td><button class='guncelle btn btn-custom' value='" + yzrId + " '>Güncelle</button></td>";
                var silButon = "<td><button class='sil btn btn-danger' value='" + yzrId + " '>Sil</button></td>";
                var kitapAdet = "<td>0</td>";
                $("#example tbody").prepend('<tr>' + yzrMyProperty + kitapAdet + guncelleButon + silButon + '</tr>');
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Eklendi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
        });
    }
});
$(document).on("click", ".yazarSil", async function () {
    var tr = $(this).parent("td").parent("tr");
    var yazarId = $(this).val();
    $.ajax({
        type: 'Post',
        url: '/Yazar/SilJson',
        data: { "yazarId": yazarId },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Silindi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Yazar Silinmedi',
                    text: 'Bir Sorun İle Karşılaşıldı!'
                });
            }
        }
    });
});
$(document).on("click", ".yazarGuncelle", async function () {
    var yzrId = $(this).val();
    var yzrAdTd = $(this).parent("td").parent("tr").find("td:first");
    var yzrMyProperty = yzrAdTd.html();
    const { value: formValues } = await Swal.fire({
        title: 'Yazar Güncelle',
        html:
            '<input id="yzrMyProperty" value="' + yzrMyProperty + '" class="swal2-input">'
    })
    yzrMyProperty = $("#yzrMyProperty").val();

    $.ajax({
        type: 'Post',
        url: '/Yazar/GuncelleJson',
        data: { "yzrId": yzrId, "yzrMyProperty": yzrMyProperty },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                yzrAdTd.html(yzrMyProperty)
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Güncellendi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Yazar Güncellenmedi',
                    text: 'Bir Sorun İle Karşılaşıldı!'
                });
            }
        }
    });
});



//KİTAP İŞLEMLERİ

$(document).on("click", "#kategoriEkle", function () {
    var secilenKategoriAd = $("#kategoriler").val();
    if (secilenKategoriAd != null && secilenKategoriAd != "") {
        var secilenId = $("#kategoriler option:selected").attr("data-id");
        $("#eklenenKategoriler").append('<div id="' + secilenId + '" class="col-md-1 bg-primary kategoriSil" style="margin-right:2px; margin-bottom:2px;">' + secilenKategoriAd + '</div>');
        $("#kategoriler option:selected").remove();
    }
});
$(document).on("click", ".kategoriSil", function () {
    var id = $(this).attr("id");
    var kategoriAd = $(this).html();
    $("#kategoriler").append('<option data-id="' + id + '">' + kategoriAd + '</option>');
    $(this).remove();

});
$(document).on("click", "#kitapKaydet", function () {
    var degerler = {
        kategoriler: [],
        yazar : $("#yazar option:selected").attr("data-id"),
        kitapAd : $("#kitapAd").val(),
        kitapAdet : $("#kitapAdet").val(),
        siraNo : $("#siraNo").val()
    };
    $("#eklenenKategoriler div").each(function () {
        var id = $(this).attr("id");
        degerler.kategoriler.push(id);
    });

    $.ajax({
        type: 'Post',
        url: '/Kitap/EkleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Kitap Eklendi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else if("bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Kitap Eklenmedi',
                    text: 'Boş Alanları Lütfen Doldurun !'
                });
            }
        },
       
    });
});
$(document).on("click", ".kitapSil", function () {
    Swal.fire({
        title: 'Siliniyor...',
        text: "Silmek İstediğiğnize Emin Misiniz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sil',
        cancelButtonText:'Vazgeç'
    }).then((result) => {
        if (result.value) {
            var kitapId = $(this).val();
            var tr = $(this).parent("td").parent("tr");

            $.ajax({
                type: 'Post',
                url: '/Kitap/SilJson',
                data: { "kitapId": kitapId },
                dataType: 'Json',
                success: function (data) {
                    if (data == "1") {
                        tr.remove();
                        Swal.fire({
                            type: 'success',
                            title: 'Kitap Silindi',
                            text: 'İşlem Başarıyla Gerçekleşti !'
                        });
                    }
                    else {
                        Swal.fire({
                            type: 'error',
                            title: 'Kitap Silinmedi',
                            text: 'Veritabanında Bir Sorun Oluştu !'
                        });
                    }
                }
            });
        }
    })
});
$(document).on("click", "#kitapGuncelle", function () {
    var degerler = {
        kategoriler: [],
        yazar: $("#yazar option:selected").attr("data-id"),
        kitapAd: $("#kitapAd").val(),
        kitapAdet: $("#kitapAdet").val(),
        siraNo: $("#siraNo").val(),
        kitapId: $(this).attr("data-id")
    };
    $("#eklenenKategoriler div").each(function () {
        var id = $(this).attr("id");
        degerler.kategoriler.push(id);
    });

    $.ajax({
        type: 'Post',
        url: '/Kitap/GuncelleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Kitap Güncellendi',
                    text: 'İşlem Başarıyla Gerçekleşti '
                });
            }
            else if ("bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Kitap Güncellenmedi!',
                    text: 'Boş Alanları Lütfen Doldurun !'
                });
            }
        },

    });
});
$(document).on("click", "#kitapVer", function () {
    var degerler = {
        uyeId: $("#uyeId option:selected").attr("data-id"),
        kitapId: $("#kitapId option:selected").attr("data-id"),
        getirecegiTarih: $("#getirecegiTarih").val()
    };

    $.ajax({
        type: 'Post',
        url: '/OduncKitap/KitapVerJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Kitap Verildi!',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Kitap Verilmedi',
                    text: 'Bir Sorun İle Karşılaşıldı !'
                });
            }
        }
    });
});
$(document).on("click", "#verilenKitabiGuncelle", function () {
    var degerler = {
        oduncKitapId: $(this).attr("data-id"),
        uyeId: $("#uyeId option:selected").attr("data-id"),
        kitapId: $("#kitapId option:selected").attr("data-id"),
        getirecegiTarih: $("#getirecegiTarih").val()
    };

    $.ajax({
        type: 'Post',
        url: '/OduncKitap/VerilenKitabiGuncelleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Verilen Kitap Güncellendi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Verilen Kitap Güncellenmedi !',
                    text: 'Bir Sorun İle Karşılaşıldı !'
                });
            }
        }
    });
});
$(document).on("click", ".getirdiOlarakIsaretle", function () {
    Swal.fire({
        title: 'İşaretle',
        text: "Getirildi Olarak İşaretlemek İstiyo Musunuz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.value) {
            var oduncKitapId = $(this).val();
            var tr = $(this).parent("td").parent("tr");

            $.ajax({
                type: 'Post',
                url: '/OduncKitap/GetirdiIsaretle',
                data: { "oduncKitapId": oduncKitapId },
                dataType: 'Json',
                success: function (data) {
                    if (data == "1") {
                        tr.remove();
                        Swal.fire({
                            type: 'success',
                            title: 'Getirdi Olarak İşaretlendi',
                            text: 'İşlem Başarıyla Gerçekleşti !'
                        });
                    }
                    else {
                        Swal.fire({
                            type: 'error',
                            title: 'Getirdi Olarak İşaretlenmedi',
                            text: 'Veritabanında Bir Sorun Oluştu ! '
                        });
                    }
                }
            });
        }
    })
});



//ÜYE İŞLEMLERİ

$(document).on("click", "#uyeKaydet", function () {
    var degerler = {
        uyeAd: $("#uyeAd").val(),
        uyeSoyad: $("#uyeSoyad").val(),
        uyeTc: $("#uyeTc").val(),
        uyeTel: $("#uyeTel").val()
    };

    $.ajax({
        type: 'Post',
        url: '/Uye/EkleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Üye Eklendi',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else if ("bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Üye Eklenmedi',
                    text: 'Boş Alanları Lütfen Doldurun !'
                });
            }
        }

    });
});
$(document).on("click", ".uyeSil", function () {
    Swal.fire({
        title: 'Siliniyor...',
        text: "Üyeyi Silmek İstediğiğnize Emin Misiniz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sil',
        cancelButtonText: 'Vazgeç'
    }).then((result) => {
        if (result.value) {
            var uyeId = $(this).val();
            var tr = $(this).parent("td").parent("tr");

            $.ajax({
                type: 'Post',
                url: '/Uye/SilJson',
                data: { "uyeId": uyeId },
                dataType: 'Json',
                success: function (data) {
                    if (data == "1") {
                        tr.remove();
                        Swal.fire({
                            type: 'success',
                            title: 'Üye Silindi',
                            text: 'İşlem Başarıyla Gerçekleşti !'
                        });
                    }
                    else {
                        Swal.fire({
                            type: 'error',
                            title: 'Üye Silinmedi',
                            text: 'Veritabanında Bir Sorun Oluştu !'
                        });
                    }
                }
            });
        }
    })
});
$(document).on("click", "#uyeGuncelle", function () {
    var degerler = {
        uyeAd: $("#uyeAd").val(),
        uyeSoyad: $("#uyeSoyad").val(),
        uyeTc: $("#uyeTc").val(),
        uyeTel: $("#uyeTel").val(),
        uyeId: $(this).attr("data-id")
    };
    $.ajax({
        type: 'Post',
        url: '/Uye/GuncelleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Üye Güncellendi',
                    text: 'İşlem Başarıyla Gerçekleşti '
                });
            }
            else if ("bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Üye Güncellenmedi!',
                    text: 'Boş Alanları Lütfen Doldurun !'
                });
            }
        },

    });
});

//ÜYELİK İŞLEMLERİ

$(document).on("click", "#uyelikEkle", function () {
    var uyeId = $("#uyeId").val();
    var mail = $("#mail").val();
    var parola = $("#parola").val();
    var parolaTekrar = $("#parolaTekrar").val();

    $.ajax({
        type: 'Post',
        url: '/Uyelik/EkleJson',
        data: { 'uyeId': uyeId, 'mail': mail, 'parola': parola, 'parolaTekrar': parolaTekrar },
        dataType: 'JSON',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Üyelik Oluştu',
                    text: 'İşlem Başarıyla Gerçekleşti '
                });
            }
            else if (gelenDeg == "bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Üyelik Oluşturulmadı!',
                    text: 'Boş Alanları Lütfen Doldurun !'
                });
            }
            else if (gelenDeg == "parolaUyusmazligi") {
                Swal.fire({
                    type: 'error',
                    title: 'Parolalar Uyuşmuyor',
                    text: 'Gerekli Alanları Tekrar Gözden Geçirin!'
                });
            }
        }

    });
});
$(document).on("click", "#uyelikGuncelle", function () {
    var uyeId = $("#uyeId").val();
    var mail = $("#mail").val();
    var parola = $("#parola").val();
    var parolaTekrar = $("#parolaTekrar").val();

    $.ajax({
        type: 'Post',
        url: '/Uyelik/GuncelleJson',
        data: { 'uyeId': uyeId, 'mail': mail, 'parola': parola, 'parolaTekrar': parolaTekrar },
        dataType: 'JSON',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Üyelik Güncellendi',
                    text: 'İşlem Başarıyla Gerçekleşti '
                });
            }
            else if (gelenDeg == "mailbosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Üyelik Güncellenmedi!',
                    text: 'Mail Alanını Doldurunuz!'
                });
            }
            else if (gelenDeg == "parolaUyusmazligi") {
                Swal.fire({
                    type: 'error',
                    title: 'Parolalar Uyuşmuyor',
                    text: 'Gerekli Alanları Tekrar Gözden Geçirin!'
                });
            }
        }

    });
});
$(document).on("click", ".uyelikSil", function () {
    var uyeId = $(this).val();
    var tr = $(this).parent("td").parent("tr");
    $.ajax({
        type: 'Post',
        url: '/Uyelik/SilJson',
        data: { 'uyeId': uyeId },
        dataType: 'JSON',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Üyelik Silindi',
                    text: 'İşlem Başarıyla Gerçekleşti '
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Üyelik Silinmedi!',
                    text: 'Veritabanında Bir Sorun Oluştu!'
                });
            }
        }

    });
});
$(document).on("click", "#yetkiAta", async function () {
    var select = '<select id="yetkiId">' +
        '<option value="2">Moderatör</option>' +
        '<option value="3">İzleyici</option>' +
    '</select >';

    const { value: formValues } = await Swal.fire({
        title: 'Yetki Ata ',
        html: select
    })


    var uyeId = $(this).attr("data-id");
    var yetkiId = $("#yetkiId").val();
    var yetkiAd = $("#yetkiId option:selected").text()
    var buton = $(this);

    $.ajax({
        type: 'Post',
        url: '/Uye/YetkiAtaJson',
        data: { "uyeId": uyeId, "yetkiId": yetkiId },
        dataType: 'Json',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                buton.text(yetkiAd);
                Swal.fire({
                    type: 'success',
                    title: 'Yetki Atandı',
                    text: 'İşlem Başarıyla Gerçekleşti !'
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Yetki Atanmadı',
                    text: 'Veritabanında Bir Sorun Oluştu !'
                });
            }
        }
    });
});
