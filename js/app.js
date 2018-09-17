console.log("HOMEWORK BAY-BEEE");

// 1.
// boolean, a variable that contains it
// string, perhaps as the value in a key/value pair in an object
// an object, with each feature (e.g. hull, lasers) being a key
// an array of strings, with the names as strings
// an array of arrays. each child array has two values, name (string) and location (string)
// an object for "the class" with each student being a key, and each student key containing 
    // keys fora name, location, and a list. each list is an array of strings of 
    // their favorite TV shows

// 2.
const rainbow = ["red", "orange", "yellow", "green", "blue", "violet"];
rainbow[4];
const deeter = {
    food: "burger",
    hobby: "skiing",
    town: "Denver",
    datatype: "objects"
};
deeter.hobby;

// 3. Crazy Object!

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

  crazyObject.taco[1].salsa[5];
  crazyObject.larry.quotes[0];
  crazyObject.larry.characters[2].favourtieHobby;
  crazyObject.larry.nicknames[1];
  crazyObject.larry.characters[1];

//   4. Object-ception

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

 