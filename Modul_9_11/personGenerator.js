const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Анастасия",
            "id_3": "Дарья",
            "id_4": "Елена",
            "id_5": "Мария",
            "id_6": "Любовь",
            "id_7": "Наталья",
            "id_8": "Полина",
            "id_9": "Екатерина",
            "id_10": "Юлия"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Павлов",
            "id_3": "Вячеславов",
            "id_4": "Вадимов",
            "id_5": "Михайлов",
            "id_6": "Дмитриев",
            "id_7": "Владимиров",
            "id_8": "Георгиев",
            "id_9": "Алексеев",
            "id_10": "Николаев"
        }
    }`,

    maleProfessionJson: `{
        "count": 3,
        "list": {     
            "id_1": "Супермен",
            "id_2": "Программист",
            "id_3": "Солдат"
        }
    }`,

    femaleProfessionJson: `{
        "count": 3,
        "list": {     
            "id_1": "Учительница",
            "id_2": "Секретарь",
            "id_3": "Супервуман"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender() {
        return this.gender=!this.randomIntNumber()?'Мужчина':'Женщина';
    },

    randomName: function(gender) {
        if (gender =='Мужчина') {
            let maleName=[this.randomValue(this.firstNameMaleJson),this.randomValue(this.surnameJson),this.randomValue(this.patronymicJson)+'ич',this.randomValue(this.maleProfessionJson)];
            return maleName;
        }
        else{
            let femaleName=[this.randomValue(this.firstNameFemaleJson),this.randomValue(this.surnameJson)+'а',this.randomValue(this.patronymicJson)+'на',this.randomValue(this.femaleProfessionJson)];
            return femaleName;
        }

    },
    
    randomBirthDate(){
        let year=this.randomIntNumber(2022,1940);
        let month=this.randomValue(this.monthJson);
        let day;
        if(month=='Апреля'||'Июня'||'Сентября'||'Ноября'){
            day=this.randomIntNumber(30,1);
        }else 
        if(month=='Февраля'){
            day=this.randomIntNumber(29,1)  
        }else{
          day=this.randomIntNumber(30,1);
      }
      return day+' '+month+' '+year;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.name = this.randomName(this.person.gender);
        this.person.birthDate=this.randomBirthDate();
        return this.person;
    }
};
