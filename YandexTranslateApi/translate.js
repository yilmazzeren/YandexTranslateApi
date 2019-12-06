function Translate (word,language) {
    this.apikey = "trnsl.1.1.20191205T234428Z.c9da5d60bf9743e2.51de7e9ac19537cf078296c1d52a0b9a97afa122";
    this.word = word; // çevirilmek istenilen kelime
    this.language = language; // Hangi dile çevirmek istenilen

    // XHR object

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function (callback) {
    // Ajax İşlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload = () => {
        if(this.xhr.status ===200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }else{
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}