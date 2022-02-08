const request = require('supertest')
const server = require('../server/server');
const questions = require('../server/questions');

describe('Get questions', () => {
    it('should return correct questions', async () => {
        const res = await request(server)
            .get('/api/questions');

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(questions);
    })
})