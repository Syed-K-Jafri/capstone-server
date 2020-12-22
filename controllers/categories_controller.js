const categoriesModel = require('../models/categories_model');
const questionModel = require('../models/questions_model');
const userModel = require('../models/users_model');
const answerModel = require('../models/answers_model');
const db = require('../config/db_config');

class Categories {
  
    constructor() { }

    createCategory() {
        return async (req, res) => { 
         
            const { title } = req.body;
            
            if (!req.body || !title) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            try {
                const category = await categoriesModel.findOne({ where: { title: title } });
                if (category) {
                    return res.status(409).send({ msg: 'Category against this title already exist.' });
                } else {
                    const newCategory = await categoriesModel.create({ title });
                    return res.status(200).json({ msg: 'Category Created Successfully' });
                }
            } catch (err) {
                console.log('Error in finding category: ', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
    deleteCategories() {
        return async (req, res) => { 
            const { category_id } = req.body;
            
            if (!req.body || !category_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await categoriesModel.update({ is_deleted: true }, { where: { id: category_id } });
                return res.status(200).send({ msg: 'Category Deleted Successfully' });
            } catch (err) {
                console.log('Error in deleting specific category from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
}

module.exports = new Categories();
