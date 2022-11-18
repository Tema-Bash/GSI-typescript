/*
    Практика:
    1. Создать 2 интерфейса:
    InterfaceExampleOne состоит из полей, a - строка, b - число, c - строка или массив строк, d - любой тип
    InterfaceExampleTwo имеет все те же поля что и InterfaceExampleOne только нет d, а "а" - число.
*/

interface IFirst {
    a: string;
    b: number;
    c: number[];
    d: any;
}

interface ISecond extends Omit<IFirst, 'a'> {
    a: number;
    b: number;
    c: number[];
}

/*
    2. Создать enum'ы FieldTypes, FieldTheme, FieldSize (ключи придумай сам) и интерфейс FieldProps.
    FieldProps состоит из: type - принимает на вход значение енама FieldTypes, size и theme - принимает на вход значение ключа,
    например, если типизировать какой-нибудь компонент или класс, то на вход можно отдать строку равную одному из ключей енама.
*/

/*
FieldProps состоит из: type - принимает на вход значение енама
 FieldTypes, size и theme - принимает на вход значение ключа,
    например, если типизировать какой-нибудь компонент или
    класс, то на вход можно отдать строку равную одному из
    ключей енама.

*/
enum FieldTypes {
    car = 'volvo',
    flight = 'to mos',
    ship = 'titanic',
    spaceship = 'b12',
}

enum FieldTheme {
    dark = '000',
    light = 'fff',
    grey = 'ddd',
    blue = '00f',
}

enum FieldSize {
    small = 's',
    medium = 'm',
    large = 'l',
}
interface IFieldProps {
    type: FieldTypes;
    size: keyof typeof FieldSize;
    theme: keyof typeof FieldTheme;
}

let tmp: IFieldProps = {
    type: FieldTypes.car,
    size: 'large',
    theme: 'grey',
};

/*
    3. Cоздать 2 интерфейса PropertyObjectOne и PropertyObjectTwo имеющие одинаковые поля p1 и p2, но у PropertyObjectOne p1 и p2
    имеют тип InterfaceExampleOne, а у PropertyObjectTwo поля имеют тип InterfaceExampleTwo.
    InterfaceExampleOne и InterfaceExampleTwo брать из п.1. Задачу выполнить через дженерики.
*/

interface Generic<Type> {
    p1: Type;
    p2: Type;
}

type IPropertyObjectOne = Generic<IFirst>;

type IPropertyObjectTwo = Generic<ISecond>;
