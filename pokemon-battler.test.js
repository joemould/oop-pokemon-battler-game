const { Pokemon, Trainer, Battle } = require('./pokemon-battler');

let bulbasaur;
let pikachu;
let squirtle;
let staru;
let ash;
let misty;
let testBattle;

beforeEach(() => {
  bulbasaur = new Pokemon('Bulbasaur', 50, 60, 'arrghh', 'grass', [
    'Tackle',
    'Vine Whip'
  ]);
  pikachu = new Pokemon('Pikachu', 45, 65, 'pikachuuu', 'electric', [
    'Quick Attack',
    'Thunder Shock'
  ]);
  squirtle = new Pokemon('Squirtle', 55, 50, 'squirrtle', 'water', [
    'Tackle',
    'Water Gun'
  ]);
  staryu = new Pokemon('Staryu', 55, 50, 'zzzzzzzz', 'water', [
    'Tackle',
    'Water Gun'
  ]);
  ash = new Trainer('Ash', [bulbasaur, pikachu]);
  misty = new Trainer('Misty', [squirtle, staru]);
  testBattle = new Battle([ash, misty]);
});

// create moves lookup, and a trainer method analyse move-set

describe('Pokemon class', () => {
  it('return pokemon with a name property given as argument', () => {
    expect(bulbasaur.name).toBe('Bulbasaur');
  });
  it('return pokemon with a hitPoints property given as argument', () => {
    expect(bulbasaur.hitPoints).toBe(50);
  });
  it('return pokemon with an attackDamage property given as argument', () => {
    expect(bulbasaur.attackDamage).toBe(60);
  });
  it('return pokemon with a sound property given as argument', () => {
    expect(bulbasaur.cry).toBe('arrghh');
  });
  it('return pokemon with a type property given as argument', () => {
    expect(bulbasaur.type).toBe('grass');
  });
  it('return pokemon with a moves property given as argument', () => {
    expect(bulbasaur.moves).toEqual(['Tackle', 'Vine Whip']);
  });
  describe('methods: ', () => {
    describe('sound()', () => {
      it("return the pokemon's cry upon function call", () => {
        expect(bulbasaur.sound()).toBe('Bulbasaur: arrghh...');
      });
      it("return pokemon's cry repeated n times as given in function argument", () => {
        expect(bulbasaur.sound(3)).toBe('Bulbasaur: arrghh arrghh arrghh...');
      });
    });
  });
});
describe('Trainer class', () => {
  it('return trainer with a name property given as argument', () => {
    expect(ash.name).toBe('Ash');
  });
  it('return trainer with a storage property given as argument', () => {
    expect(ash.storage).toEqual([bulbasaur, pikachu]);
  });
  describe('methods: ', () => {
    describe('checkMoves()', () => {
      it('returns a string of moves including information on the damage and type for given pokemon as input argument', () => {
        expect(ash.checkMoves('Bulbasaur')).toBe(
          'Tackle: type: normal, damage: 40.\nVine Whip: type: grass, damage: 45.'
        );
      });
      it('returns a rejection string when pokemon not valid', () => {
        expect(ash.checkMoves('Magikarp')).toBe(
          'Magikarp is not available in storage.'
        );
      });
    });
  });
});
describe('Battle class', () => {
  it('return battle class with a trainer property given as an argument initialised to 0', () => {
    expect(testBattle.trainers).toEqual([ash, misty]);
  });
  it('return battle class with a turn property', () => {
    expect(testBattle.turn).toEqual(0);
  });
  it('return battle class with a message property initialised to an empty string', () => {
    expect(testBattle.message).toEqual('');
  });
  describe('methods: ', () => {});
});
