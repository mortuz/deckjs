class Deck {

    constructor() {
        this.deck = [];
        this.dealt_cards = [];
        this.generate_deck();
    }

    generate_deck() {
        let card = (suit, value) => {
            this.name = value + ' of ' + suit;
            this.suit = suit;
            this.value = value;

            return {
                name: this.name,
                suit: this.suit,
                value: this.value
            };
        }

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];

        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.deck.push(card(suits[s], values[v]));                
            }
            
        }
    }

    shuffle() {
        let current_index = this.deck.length, temp_val, rand_ind;

        while (current_index != 0) {
            rand_ind = Math.floor(Math.random() * current_index);
            current_index -= 1;
            temp_val = this.deck[current_index];
            this.deck[current_index] = this.deck[rand_ind];
            this.deck[rand_ind] = temp_val;
        }
    }

    deal() {
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card);
        return dealt_card;
    }

    replace() {
        this.deck.unshift(this.dealt_cards.shift());
    }

    clear_deck() {
        this.deck = [];
    }
    

}