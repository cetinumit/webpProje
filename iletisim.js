new Vue({
    el: '#iletisim',
    data: {
        form: {
            isim: '',
            soyad: '',
            email: '',
            Telefon: '',
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
            this.form.Telefon = '';
            this.form.mesaj = '';
            this.errors = {};
        }
    }
});
