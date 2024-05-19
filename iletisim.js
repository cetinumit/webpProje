new Vue({
    el: '#iletisim',
    data: {
        form: {
            isim: '',
            soyad: '',
            email: '',
            Telefon: '',
            cinsiyet: '',
            mesaj: ''
        },
        errors: {}
    },
    methods: {
        formKontrol() {
            this.errors = {};

            if (!this.form.isim) {
                this.errors.isim = 'Adınızı giriniz.';
            }
            if (!this.form.soyad) {
                this.errors.soyad = 'Soyadınızı giriniz.';
            }
            if (!this.form.email) {
                this.errors.email = 'E-posta adresinizi giriniz.';
            } else if (!this.emailKontrol(this.form.email)) {
                this.errors.email = 'Geçerli bir e-posta adresi giriniz.';
            }

            if (!this.form.telefon) {
                this.errors.telefon = 'Telefon Numarası alanını doldurunuz.';
            } else if (!/^\d+$/.test(this.form.telefon)) { // Telefon numarasının sadece sayı içermesini sağla
                this.errors.telefon = 'Telefon numarası sadece sayı içermelidir.';
            }
            if (!this.form.cinsiyet) {
                this.errors.cinsiyet = 'Cinsiyet seçimi gerekli.';
            }

            if (!this.form.mesaj) {
                this.errors.mesaj = 'Mesaj alanını doldurunuz.';
            }

            if (Object.keys(this.errors).length === 0) {
                this.formGönder();
            }

        },
        emailKontrol(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
            return re.test(email);
        },
        formGönder() {
            localStorage.setItem('formData', JSON.stringify(this.form));
            window.location.href = 'sonuclar.html';
        },
        formTemizle() {
            this.form.isim = '';
            this.form.soyad = '';
            this.form.email = '';
            this.form.telefon = '';
            this.form.cinsiyet = '';
            this.form.mesaj = '';       
            this.errors = {};
        }
    }
});

function jsIleGonder() {
    // Girilen değerlerin alınması
    var isimInput = document.getElementById('isim');
    var soyadInput = document.getElementById('soyad');
    var telefonInput = document.getElementById('telefon');
    var emailInput = document.getElementById('email');
    var mesajInput = document.getElementById('mesaj');
    var erkekInput = document.getElementById('erkek'); // Erkek seçeneğinin id'si erkek
    var kadinInput = document.getElementById('kadin'); // Kadın seçeneğinin id'si kadin

    // Girilen değerlerin kontrol edilmesi
    var isim = isimInput.value.trim();
    var soyad = soyadInput.value.trim();
    var telefon = telefonInput.value.trim();
    var email = emailInput.value.trim();
    var mesaj = mesajInput.value.trim();
    var cinsiyetValue = erkekInput.checked ? erkekInput.value : (kadinInput.checked ? kadinInput.value : null);

    // Hata mesajları için obje
    var errors = {};

    // Değerlerin doğrulanması
    if (!isim) {
        errors.isim = 'Adınızı giriniz.';
    }
    if (!soyad) {
        errors.soyad = 'Soyadınızı giriniz.';
    }
    if (!telefon) {
        errors.telefon = 'Telefon Numarası alanını doldurunuz.';
    } else if (!/^\d+$/.test(telefon)) { // Telefon numarasının yalnızca sayılardan oluşup oluşmadığını kontrol et
        errors.telefon = 'Telefon numarası sadece sayı içermelidir.';
    }
    if (!email) {
        errors.email = 'E-posta adresinizi giriniz.';
    } else if (!emailKontrol(email)) {
        errors.email = 'Geçerli bir e-posta adresi giriniz.';
    }
    if (!cinsiyetValue) {
        errors.cinsiyet = 'Cinsiyet seçimi gerekli.';
    }
    if (!mesaj) {
        errors.mesaj = 'Mesaj alanını doldurunuz.';
    }

    // Hata mesajı varsa ekrana yazdır
    if (Object.keys(errors).length > 0) {
        var errorMessage = "Lütfen aşağıdaki alanları doldurun:\n";
        for (var key in errors) {
            if (errors.hasOwnProperty(key)) {
                errorMessage += "- " + errors[key] + "\n";
            }
        }
        alert(errorMessage);
        return;
    }

    // Hata yoksa form verilerini yerel depolama alanına kaydet
    localStorage.setItem('isim', isim);
    localStorage.setItem('soyad', soyad);
    localStorage.setItem('telefon', telefon);
    localStorage.setItem('email', email);
    localStorage.setItem('mesaj', mesaj);
    localStorage.setItem('cinsiyet', cinsiyetValue);

    // Başka bir sayfaya yönlendir
    window.location.href = 'sonuclar.html';
}

// Email formatını kontrol eden fonksiyon
function emailKontrol(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
    return re.test(email);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("js-gonder-button").addEventListener("click", jsIleGonder);
});






