import {FindDate} from './../src/date.js';

describe ('FindDate' function(date){



  it ('should find your birthdate' function() {
    var birthday = new FindDate(1992, 8, 23)
    expect(birthday.year).toEqual(1992);
    expect(birthday.month).toEqual("Sep");
    expect(birthday.day).toEqual(23);

  }))

  // it ('should calculate current time - birthdate time' function(date) {
  // })),
  //
  // it ('should change the ctime-btime number proportionally through the planets time.' function(date) {
  // }))
})
