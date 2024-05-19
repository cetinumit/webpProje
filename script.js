// API anahtarınızı buraya ekleyin
const API_KEY = '630d29e6877b1c210f925aea5c4e63b4';

// Film arama fonksiyonu
function filmAra() {
    var filmAdi = document.getElementById("filmAdi").value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(filmAdi)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Film bulunamadı');
            }
            return response.json();
        })
        .then(data => {
            if (data.results && data.results.length > 0) {
                sonuclariGoster(data.results[0]); // Sadece ilk filmi göster
            } else {
                console.log('Film bulunamadı');
            }
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

// Sonucu görüntüleme fonksiyonu
function sonuclariGoster(film) {
    var sonucHTML = "<h2>Sonuç:</h2>";
    sonucHTML += "<p><strong>Ad:</strong> " + film.title + "</p>";
    sonucHTML += "<p><strong>Yıl:</strong> " + film.release_date + "</p>";
    sonucHTML += "<p><strong>Açıklama:</strong> " + film.overview + "</p>";
    document.getElementById("sonuc").innerHTML = sonucHTML;
}
