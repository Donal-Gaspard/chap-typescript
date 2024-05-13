type Fuel = 'Petrol' |'Diesel' ;

// const
const NB_OF_RECHARGES = 3;

const MALUS = 20000;

const  BONUS = 5000;

// alias type
type Model = string | number;

enum Option {
  LEATHER_SEATS = 'LEATHER_SEATS',
  GPS = 'GPS',
  AUTOMATIC = 'AUTOMATIC',
  MANUAL = 'MANUAL',
  AIR_CONDITIONING = 'AIR_CONDITIONING',
  CHARGING_STATION = 'CHARGING_STATION',
}

type OptionCost = Record<Option, number>;

export const optionsCost: OptionCost = {
  [Option.LEATHER_SEATS]: 500,
  [Option.GPS]: 300,
  [Option.AUTOMATIC]: 1000,
  [Option.MANUAL]: 0,
  [Option.AIR_CONDITIONING]: 200,
  [Option.CHARGING_STATION]: 2000,
};

interface Car {
  model: Model;
  name: string;
  wheels: number;
  color: string;
  options: Option[];
  consumption: number;
}

interface CarFactory<T extends Car> {
  howToFix: (vehicle: T) => void;
  monthlyCost: (vehicle: T)=> number;
  totalPrice: (vehicle: T) => number;
}

// Type générique
interface Thermal extends Car  {
  fuel: Fuel;
  carbonRejection: number;
}

interface Electric extends Car {
  chargeHours: number;
  autonomy: number;
  autoPilot: boolean;
}

export const thermalCar: CarFactory<Thermal> = {
  howToFix: () => console.log('change each part of the car'),
  monthlyCost: (car) =>  car.consumption * NB_OF_RECHARGES,
  totalPrice: (car) => {
    let total = 0;
    car.options.forEach(option => {
      total += optionsCost[option];
    });

    return total + MALUS;
  },
}

export const electricCar: CarFactory<Electric> = {
  howToFix: () => console.log('change the battery'),
  monthlyCost: (car) =>  car.consumption * NB_OF_RECHARGES,
  totalPrice: (car) => {
    let total = 0;
    car.options.forEach(option => {
      total += optionsCost[option];
    });
    return total - BONUS;
  }
}

const fordFocus: Thermal = {
  model: 'Ford Focus',
  name: 'Focus',
  wheels: 4,
  color: 'red',
  options: [Option.AUTOMATIC, Option.AIR_CONDITIONING],
  consumption: 5,
  fuel: 'Petrol',
  carbonRejection: 100,
}

const tesla: Electric = {
  model: 'Tesla',
  name: 'Model 3',
  wheels: 4,
  color: 'black',
  options: [Option.AUTOMATIC, Option.AIR_CONDITIONING, Option.CHARGING_STATION],
  consumption: 0,
  chargeHours: 2,
  autonomy: 300,
  autoPilot: true,
}

console.log(thermalCar.totalPrice(fordFocus));

console.log(electricCar.totalPrice(tesla));
