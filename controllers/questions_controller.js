const questionModel = require('../models/questions_model');
const userModel = require('../models/users_model');
const answerModel = require('../models/answers_model');
const categoryModel = require('../models/categories_model');

class Questions {
  
    constructor() { }

    createQuestion() {
        return async (req, res) => { 
         
            const { question, user_id, category_id } = req.body;
            
            if (!req.body || !question ||!user_id ||!category_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            if (!question && question.trim().length <= 0) {
                return res.status(400).send({ msg: 'Please enter valid question' });
            }
    
            if (question && question.trim()[question.trim().length-1] != '?') {
                return res.status(400).send({ msg: 'Please add question mark at the end of question (?)' });
            }

            try {
                const result = await questionModel.create({ question, user_id, category_id });
                return res.status(200).json({ msg: 'Question Created Successfully' });
            } catch (err) {
                console.log('Error in question creation: ', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
    specificQuestion() {
        return async (req, res) => { 
            const { id, category_id } = req.params;
            
            if (!req.body ||!id ||!category_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            try {
                const result = await questionModel.findOne({ where: { id: id, category_id: category_id }, include: [ userModel, categoryModel, { model: answerModel, include: [userModel] } ] }); 
                if (result) {
                    return res.status(200).send({ data: result });
                } else {
                    return res.status(404).send({ msg: 'Question not found against this Question ID' });
                }
            } catch (err) {
                console.log('Error in listing specific question from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
}

module.exports = new Questions();
