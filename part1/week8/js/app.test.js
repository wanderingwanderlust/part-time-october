var utils  = require('course-utilities');
var hello = utils.load('./js/app.js', 'hello');

const MOCK_DATA = [{
    "type": "gif",
    "id": "A8luhvZyijrZTJXHgQ",
    "url": "https://giphy.com/gifs/falloutboy-fall-out-boy-love-from-the-other-side-A8luhvZyijrZTJXHgQ",
    "slug": "falloutboy-fall-out-boy-love-from-the-other-side-A8luhvZyijrZTJXHgQ",
    "bitly_gif_url": "https://gph.is/g/4wO5YXD",
    "bitly_url": "https://gph.is/g/4wO5YXD",
    "embed_url": "https://giphy.com/embed/A8luhvZyijrZTJXHgQ",
    "username": "falloutboy",
    "source": "https://www.youtube.com/watch?v=oBrkbWSB3Ls",
    "title": "Snow Winter GIF by Fall Out Boy",
    "rating": "g",
    "content_url": "",
    "source_tld": "www.youtube.com",
    "source_post_url": "https://www.youtube.com/watch?v=oBrkbWSB3Ls",
    "is_sticker": 0,
    "import_datetime": "2023-01-18 22:25:54",
    "trending_datetime": "0000-00-00 00:00:00",
    "images": {
        "original": {
            "height": "270",
            "width": "480",
            "size": "2492942",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy.gif&ct=g",
            "mp4_size": "469040",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy.mp4&ct=g",
            "webp_size": "825374",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy.webp&ct=g",
            "frames": "40",
            "hash": "65cfd3384a75acb90bd7bf45d4558d2b"
        },
        "downsized": {
            "height": "270",
            "width": "480",
            "size": "1516792",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-downsized.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-downsized.gif&ct=g"
        },
        "downsized_large": {
            "height": "270",
            "width": "480",
            "size": "2492942",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy.gif&ct=g"
        },
        "downsized_medium": {
            "height": "270",
            "width": "480",
            "size": "2492942",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy.gif&ct=g"
        },
        "downsized_small": {
            "height": "174",
            "width": "309",
            "mp4_size": "90035",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-downsized-small.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-downsized-small.mp4&ct=g"
        },
        "downsized_still": {
            "height": "270",
            "width": "480",
            "size": "39508",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-downsized_s.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-downsized_s.gif&ct=g"
        },
        "fixed_height": {
            "height": "200",
            "width": "356",
            "size": "1069116",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200.gif&ct=g",
            "mp4_size": "276119",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200.mp4&ct=g",
            "webp_size": "585454",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
            "height": "200",
            "width": "356",
            "size": "181351",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200_d.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200_d.gif&ct=g",
            "webp_size": "111334",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200_d.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "371617",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100.gif&ct=g",
            "mp4_size": "82552",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100.mp4&ct=g",
            "webp_size": "185478",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100.webp&ct=g"
        },
        "fixed_height_small_still": {
            "height": "100",
            "width": "178",
            "size": "11098",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100_s.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100_s.gif&ct=g"
        },
        "fixed_height_still": {
            "height": "200",
            "width": "356",
            "size": "28302",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200_s.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200_s.gif&ct=g"
        },
        "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "421135",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200w.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200w.gif&ct=g",
            "mp4_size": "95718",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200w.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200w.mp4&ct=g",
            "webp_size": "227842",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200w.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "68231",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200w_d.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200w_d.gif&ct=g",
            "webp_size": "40360",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200w_d.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "123998",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100w.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100w.gif&ct=g",
            "mp4_size": "26051",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100w.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100w.mp4&ct=g",
            "webp_size": "66750",
            "webp": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100w.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100w.webp&ct=g"
        },
        "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "3896",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/100w_s.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=100w_s.gif&ct=g"
        },
        "fixed_width_still": {
            "height": "113",
            "width": "200",
            "size": "14336",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/200w_s.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=200w_s.gif&ct=g"
        },
        "looping": {
            "mp4_size": "2368008",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-loop.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-loop.mp4&ct=g"
        },
        "original_still": {
            "height": "270",
            "width": "480",
            "size": "68864",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy_s.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy_s.gif&ct=g"
        },
        "original_mp4": {
            "height": "270",
            "width": "480",
            "mp4_size": "469040",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy.mp4&ct=g"
        },
        "preview": {
            "height": "162",
            "width": "288",
            "mp4_size": "36036",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-preview.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-preview.mp4&ct=g"
        },
        "preview_gif": {
            "height": "50",
            "width": "89",
            "size": "48552",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-preview.gif?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-preview.gif&ct=g"
        },
        "preview_webp": {
            "height": "88",
            "width": "156",
            "size": "36282",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-preview.webp?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-preview.webp&ct=g"
        },
        "hd": {
            "height": "1080",
            "width": "1920",
            "mp4_size": "3681429",
            "mp4": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/giphy-hd.mp4?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=giphy-hd.mp4&ct=g"
        },
        "480w_still": {
            "height": "270",
            "width": "480",
            "size": "2492942",
            "url": "https://media4.giphy.com/media/A8luhvZyijrZTJXHgQ/480w_s.jpg?cid=4479849bofnmo9oftoildjvk107zo53go1awqhp5r3vau015&rid=480w_s.jpg&ct=g"
        }
    },
    "user": {
        "avatar_url": "https://media1.giphy.com/avatars/falloutboy/ENFdJ2eJd3G2.jpeg",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/falloutboy/",
        "username": "falloutboy",
        "display_name": "Fall Out Boy",
        "description": "",
        "instagram_url": "https://instagram.com/falloutboy",
        "website_url": "https://falloutboy.com",
        "is_verified": true
    },
    "analytics_response_payload": "e=Z2lmX2lkPUE4bHVodlp5aWpyWlRKWEhnUSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDQ3OTg0OWJvZm5tbzlvZnRvaWxkanZrMTA3em81M2dvMWF3cWhwNXIzdmF1MDE1JmN0PWc",
    "analytics": {
        "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUE4bHVodlp5aWpyWlRKWEhnUSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDQ3OTg0OWJvZm5tbzlvZnRvaWxkanZrMTA3em81M2dvMWF3cWhwNXIzdmF1MDE1JmN0PWc&action_type=SEEN"
        },
        "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUE4bHVodlp5aWpyWlRKWEhnUSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDQ3OTg0OWJvZm5tbzlvZnRvaWxkanZrMTA3em81M2dvMWF3cWhwNXIzdmF1MDE1JmN0PWc&action_type=CLICK"
        },
        "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUE4bHVodlp5aWpyWlRKWEhnUSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDQ3OTg0OWJvZm5tbzlvZnRvaWxkanZrMTA3em81M2dvMWF3cWhwNXIzdmF1MDE1JmN0PWc&action_type=SENT"
        }
    }
}]

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

    it("should return a list of Gifs", () => {
            expect(gifs).toBe(MOCK_DATA);
    })
})