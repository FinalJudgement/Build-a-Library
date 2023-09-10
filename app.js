class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newIsCheckedOut){
    this._isCheckedOut = newIsCheckedOut;
  }

  toggleCheckOutStatus() {
    if(this._isCheckedOut === true){
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    return this._ratings ? this._ratings.reduce((a,b) => a+b) / this.ratings.length : 'This media has no rating yet';
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

}

class Book extends Media{
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director, title, runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get director() {
    return this._director
  }
  get runtime() {
    return this._runtime
  }
}

class CD extends Media{
  constructor(artist, title, songs){
    super(title);
    this._artist = artist
    this._songs = songs
  }

  get artist() {
    return this._artist
  }

  get songs() {
    return this._songs
  }
}

let historyOfEverything = new Book('Bill Bryson', 'A Short History Of Nearly Everything', 544);

console.log('History Of Everything')
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


let speed = new Movie('Jan de Bont', 'Speed', 116);
class School {
  constructor(name, numberOfStudents, level){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if(!isNaN(newNumberOfStudents)){
    this._numberOfStudents = newNumberOfStudents;
    } else {
    console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length))];
  }

}

class PrimarySchool extends School{
  constructor(pickupPolicy, ...args){
    super(...args)
    this._level = 'primary'
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class MiddleSchool extends School{
  constructor(sportsTeam, ...args) {
    super(...args);
    this._level = 'Middle';
    this._sportsTeam = sportsTeam;
  }

  
}
class HighSchool extends School{
 constructor(sportsTeam, ...args) {
    super(...args);
    this._level = 'Middle';
    this._sportsTeam = sportsTeam;
  }

  get sportsTeam() {
    return this._sportsTeam;
  }
}

let lorraineHansbury = new PrimarySchool('Students must be picked up by a parent, guardian, or a family member over the age of 13.', 'Lorraine Hansbury', 514);

lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

let alSmith = new HighSchool(['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 'Al E. Smith', 415)

console.log(alSmith.sportsTeam)


console.log('')
console.log('Speed')
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())


let leagueSoundtrack = new CD('Ryan Douglas', 'League of Legends SoundTrack', ['Login Theme', 'Lobby Theme', 'Champion Select Theme', 'In Game Theme', 'Showcase Theme'])

console.log('')
console.log('League Of Legends Soundtrack')
leagueSoundtrack.toggleCheckOutStatus();
console.log(leagueSoundtrack.isCheckedOut)
leagueSoundtrack.addRating(3)
leagueSoundtrack.addRating(5)
leagueSoundtrack.addRating(5)
console.log(leagueSoundtrack.getAverageRating())
console.log(leagueSoundtrack.songs)