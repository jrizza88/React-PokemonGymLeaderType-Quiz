
const live = require('../images/question1_live.jpg');
const scene = require('../images/question2_scene.jpg');
const lovers = require('../images/question3_lovers.jpg');
const attack = require('../images/question4_attack.jpg');
const styleGym = require('../images/question5_style.jpg');

let quizQuestions = [
    {   
        image: live,
        question: "Where would you rather live?",
        answers: [
            {
                type: "Water",
                content: "Cerulean City"
            },
            {
                type: "Fire",
                content: "Lavaridge Town"
            },
            {
                type: "Electric",
                content: "Vermillion City"
            },
            {
                type: "Grass",
                content: "Celadon City"
            },
            {
                type: "Rock",
                content: "Pewter City"
            },
            {
                type: "Psychic",
                content: "Mossdeep City"
            },
            {
                type: "Dark",
                content: "Spikemuth City"
            },
            {
                type: "Fairy",
                content: "Laverre City"
            },
            {
                type: "Fighting",
                content: "Cianwood City"
            },
            {
                type: "Dragon",
                content: "Opelucid City"
            },
            {
                type: "Poison",
                content: "Fuchsia City"
            },
            {
                type: "Bug",
                content: "Castelia City"
            },
            {
                type: "Ice",
                content: "Snowpoint City"
            },
            {
                type: "Flying",
                content: "Violet City"
            },
            {
                type: "Steel",
                content: "Olivine City"
            },
            {
                type: "Ground",
                content: "Driftveil City"
            },
            {
                type: "Normal",
                content: "Goldenrod City"
            },
            {
                type: "Ghost",
                content: "Hearthome City"
            }
        ]
    },
    {
        image: scene,
        question: "What is your favorite scene?",
        answers: [
            {
                type: "Water",
                content: "Swim, swim at the beach, a pool, even a random pond."
            },
            {
                type: "Fire",
                content: "Warm weather is key"
            },
            {
                type: "Electric",
                content: "Into a rave or EDM concert with lots of lights"
            },
            {
                type: "Grass",
                content: "Serene Nature scene, with all the grass"
            },
            {
                type: "Rock",
                content: "A nice hike"
            },
            {
                type: "Psychic",
                content: "To be one with nature, no matter where I am "
            },
            {
                type: "Dark",
                content: "Doesn't really matter, but I am a night person"
            },
            {
                type: "Fairy",
                content: "A flower garden"
            },
            {
                type: "Fighting",
                content: "Watching a MMA fight"
            },
            {
                type: "Dragon",
                content: "Somewhere most people don't know about or go to."
            },
            {
                type: "Poison",
                content: "Getting into the nitty gritty of a city"
            },
            {
                type: "Bug",
                content: "Collecting things, no matter where I travel"
            },
            {
                type: "Ice",
                content: "A ski or snowboarding trip"
            },
            {
                type: "Flying",
                content: "Flying to my next destination, anywhere in the world."
            },
            {
                type: "Steel",
                content: "To just be in a stable place"
            },
            {
                type: "Ground",
                content: "Searching and collecting items"
            },
            {
                type: "Normal",
                content: "Just getting a nice bite to eat with a friend"
            },
            {
                type: "Ghost",
                content: "Partying like there is no tomorrow. "
            }
        ]
    },
    {   image: lovers,
        question: "How would you describe your significant other or bestie?",
        answers: [
            {
                type: "Water",
                content: "Chill, go with the flow."
            },
            {
                type: "Fire",
                content: "Super quick with everything"
            },
            {
                type: "Electric",
                content: "Exciting yet charming"
            },
            {
                type: "Grass",
                content: "Relaxed, but focused."
            },
            {
                type: "Rock",
                content: "Strong person"
            },
            {
                type: "Psychic",
                content: "Extremely intuitive"
            },
            {
                type: "Dark",
                content: "Mysterious"
            },
            {
                type: "Fairy",
                content: "The friendliest person you will ever meet"
            },
            {
                type: "Fighting",
                content: "Always ready to turn up and battle it out for you"
            },
            {
                type: "Dragon",
                content: "Kind-hearted, yet brave and powerful"
            },
            {
                type: "Poison",
                content: "Natural born fight of the system"
            },
            {
                type: "Bug",
                content: "Resourceful and sticks to their usual activities"
            },
            {
                type: "Ice",
                content: "Not friendly at first, but loyal once you get to know them"
            },
            {
                type: "Flying",
                content: "A true freespirit of the world who loves to travel"
            },
            {
                type: "Steel",
                content: "Rock solid and emboldened personality"
            },
            {
                type: "Ground",
                content: "Determined, organized, but stubborn"
            },
            {
                type: "Normal",
                content: "Put together and friendly"
            },
            {
                type: "Ghost",
                content: "Distant, but present when together."
            }
        ]
    },
    {   
        image: attack,
        question: "You get attacked by a mysterious pokemon, what do you attack it with?",
        answers: [
            {
                type: "Water",
                content: "Hydro pump"
            },
            {
                type: "Fire",
                content: "FLamethrower"
            },
            {
                type: "Electric",
                content: "Thunderbolt"
            },
            {
                type: "Grass",
                content: "Razor Leaf"
            },
            {
                type: "Psychic",
                content: "Psybeam"
            },
            {
                type: "Dark",
                content: "Dark Pulse"
            },
            {
                type: "Normal",
                content: "Screech"
            },
            {
                type: "Fighting",
                content: "Cross Chop"
            },
            {
                type: "Dragon",
                content: "Draco Meter"
            }
        ]
    },
    {   image: styleGym,
        question: "Your style as a gym leader",
        answers: [
            {
                type: "Rock",
                content: "Polished, but hardy"
            },           
            {
                type: "Poison",
                content: "Sneaky and lethal"
            },
            {
                type: "Bug",
                content: "Very tactical"
            },
            {
                type: "Ice",
                content: "Resistant to surprises"
            },
            {
                type: "Flying",
                content: "Fast and furious"
            },
            {
                type: "Steel",
                content: "Strict and solid"
            },
            {
                type: "Ground",
                content: "Down to earth, but no slacker"
            },
            {
                type: "Fairy",
                content: "Giggly"
            },
            {
                type: "Ghost",
                content: "Tricky and clever"
            }
        ]
    }
  ];
  
  export default quizQuestions;