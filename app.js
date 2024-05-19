new Vue({
    el: '#app',
    data: {
        form: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        errors: {}
    },
    methods: {
        validateForm() {
            this.errors = {};

            if (!this.form.name) {
                this.errors.name = 'Adınızı giriniz.';
            }

            if (!this.form.email) {
                this.errors.email = 'E-posta adresinizi giriniz.';
            } else if (!this.validEmail(this.form.email)) {
                this.errors.email = 'Geçerli bir e-posta adresi giriniz.';
            }

            if (!this.form.subject) {
                this.errors.subject = 'Konu alanını doldurunuz.';
            }

            if (!this.form.message) {
                this.errors.message = 'Mesaj alanını doldurunuz.';
            }

            if (Object.keys(this.errors).length === 0) {
                this.submitForm();
            }
        },
        validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
            return re.test(email);
        },
        submitForm() {
            // Form verilerini başka bir sayfaya yönlendirme
            localStorage.setItem('formData', JSON.stringify(this.form));
            window.location.href = 'result.html';
        },
        clearForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.subject = '';
            this.form.message = '';
            this.errors = {};
        }
    }
});
