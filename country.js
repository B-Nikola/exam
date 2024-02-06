class Country {

    constructor(data) {
        this.flag = data.flags.png;
        this.name = data.name.common;
        this.answers = this.answers(data.translations);
    
    }

    answers(translations) {
        let answers = new Set();
        for (let key in translations) {
            answers.add(toLower(translations[key].common));
        }
        return answers;
    }

    getFlag() {
        return this.flag;
    }
    
    showFlag() {
        document.getElementById('flag').innerHTML = '';
        let flag = document.createElement('img');
        flag.src = this.flag;
        flag.alt = `Flag of ${this.name}`;
        document.getElementById('flag').appendChild(flag);
    }

    isCorrect(answer) {
        return this.answers.has(toLower(answer));
    }

    

}

export default Country;