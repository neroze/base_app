import Model from './model/homeModel'

const model = new Model()
let data = await model.find(10);