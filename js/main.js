 array = [
    {'quote': 'Beware of what you become in pursuit of what you want.'},
    {'quote': 'It\'s not what happens to you, but how you react to it that matters.' },
    {'quote': 'The best revenge is massive success.'},
    {'quote': 'You miss 100% of the shots you don\'t take.'  },
    {'quote': 'Resentment is like drinking poison and waiting for your enemies to die.' },
    {'quote': 'Do not take life too seriously. You will not get out alive.' },
    {'quote': 'Be yourself; everyone else is already taken.'},
    {'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'},
    {'quote': 'A room without books is like a body without a soul.'},
    {'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.'},
    {'quote': 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'}    
];
function add(){
    var data=``
    random = Number.parseInt(Math.random()*array.length + 1);
    data+=`"${array[random].quote}"`
    document.querySelector('#quotes').textContent = data;
}


