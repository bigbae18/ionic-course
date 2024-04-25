export interface IRecipe {
    id: number,
    name: string,
    ingredients: Array<string>,
    image: string,
    cookingTime: string
}

export const RECIPES: Array<IRecipe> = [
    {
        id: 0,
        name: 'Tortilla de patatas',
        ingredients: ['patata', 'huevo', 'sal', 'cebolla', 'aceite'],
        image: 'https://s1.eestatic.com/2020/04/10/ciencia/nutricion/nutricion_481463388_150096481_1706x960.jpg',
        cookingTime: '45 min'
    },
    {
        id: 1,
        name: 'Magro con tomate',
        ingredients: ['cerdo', 'cebolleta', 'ajo', 'laurel', 'pimiento', 'tomate', 'aceite', 'sal', 'vino'],
        image: 'https://thermomix-malaga.es/media/Posts/attachments/8752df3a264e58fc3bf983adfd7876fb.jpg',
        cookingTime: '1 h'
    },
    {
        id: 2,
        name: 'Gachas manchegas',
        ingredients: ['harina de almortas', 'pimentón rojo', 'agua', 'ajo', 'aceite', 'panceta'],
        image: 'https://www.anchacastilla.com/wp-content/uploads/2017/07/gachas_manchegas.jpg',
        cookingTime: '15 min'
    },
    {
        id: 3,
        name: 'Salmorejo cordovés',
        ingredients: ['tomate', 'aceite', 'pan', 'sal', 'ajo', 'huevo', 'jamón serrano'],
        image: 'https://img.saboresdehoy.com/receta/605/salmorejo-cordobes.jpg',
        cookingTime: '1 h 05 min'
    },
    {
        id: 4,
        name: 'Paella valenciana',
        ingredients: ['arroz', 'pollo', 'conejo', 'garrafó', 'judias verdes', 'aceite', 'tomate', 'agua', 'azafrán',
      'romero', 'sal', 'pimentón dulce'],
        image: 'https://imag.bonviveur.com/paella-valenciana-tradicional.jpg',
        cookingTime: '1 h 30 min'
    },
    {
        id: 5,
        name: 'Cachopo',
        ingredients: ['ternera', 'jamón serrano', 'queso', 'sal', 'huevo', 'patata', 'harina', 'pan rallado', 'aceite'],
        image: 'https://www.barcelo.com/pinandtravel/wp-content/uploads/2017/07/pin-and-travel-cachopo@2x.jpg',
        cookingTime: '25 min'
    },
    {
        id: 6,
        name: 'Fabada asturiana',
        ingredients: ['fabes', 'panceta', 'chorizo', 'morcilla', 'agua', 'sal', 'azafrán'],
        image: 'http://blog.welcomebeds.com/wp-content/uploads/2018/08/81bc9f1c4cb43b2e2d32b96187b86b60.jpg',
        cookingTime: '3 h'
    },
    {
        id: 7,
        name: 'Pulpo a feira',
        ingredients: ['pulpo', 'patata', 'pimentón dulce', 'aceite', 'sal'],
        image: 'http://blog.welcomebeds.com/wp-content/uploads/2018/08/0d2239dd9ef5d2684a574183970f0518.jpg',
        cookingTime: '45 min'
    },
]