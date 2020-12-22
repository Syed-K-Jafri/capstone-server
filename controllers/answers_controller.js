const answerModel = require('../models/answers_model');

class Answers {
  
    constructor() { }

    createAnswer() {
        return async (req, res) => { 
         
            const { answer, user_id, question_id } = req.body;
            
            if (!req.body || !answer ||!user_id ||!question_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            if (!answer && answer.trim().length <= 0) {
                return res.status(400).send({ msg: 'Please enter valid question' });
            }
            
            try {
                const result = await answerModel.create({ answer, user_id, question_id });     
                return res.status(200).json({ msg: 'Answer Created Successfully' });
            } catch (err) {
                console.log('Error in answer creation: ', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
}

module.exports = new Answers();
