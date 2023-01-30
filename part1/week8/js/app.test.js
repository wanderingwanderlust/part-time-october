var utils  = require('course-utilities');
var hello = utils.load('./js/app.js', 'hello');

const MOCK_DATA = [{
    "test": "test"
    },
    {"test": "test2"}
]

test('outputs the correct string', () => {
    expect(hello()).toBe("Hello World!");
  });

  

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}))


describe("get Gifs", () => {
    let gifs;

    beforeEach(async () => {
        gifs = await fetchGifs();
    })

    describe('when it returns 200'), () => {
        
        it("should return a list of Gifs", () => {
            expect(gifs).toBe(MOCK_DATA);
        })
    }


    describe('when it returns 404'), () => {
        it('should return a list of pre-select images'), () => {

        }
    }    
})