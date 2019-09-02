export default function() {
  this.namespace = '/api';

  this.get('/services', function() {
    return {
      data: [{
        type: "service",
        id: "_1",
        attributes: {
          title: "Flow Basics (Level 1)",
          duration: "75",
          description: "These Level 1 classes are perfect for those that are brand new to yoga, new to flow style yoga, or coming back from a hiatus or injury. Classes include both flow and static postures, and though they don’t move quickly, students should come prepared to MOVE!"
        }
      },
      {
        type: "service",
        id: "_2",
        attributes: {
          title: "Flow Basics (Level 2)",
          duration: "90",
          description: "Vinyasa (or flow) style yoga with an emphasis on creativity and alignment. Classes are inventive and thoughtful sequences of sun salutations, standing & seated postures, back bending and inversions - guided by a steady breath to tone and calm the mind."
        }
      },
      {
        type: "service",
        id: "_3",
        attributes: {
          title: "AIREAL YOGA: ELEVATE, EXHILARATE, ALLEVIATE",
          duration: "60",
          description: "Dive deeper into your yoga practice. Explore a heightened experience of inner and out space. Expand the boundaries of the mind-body-breath connection. Based on classical Hatha Yoga, but flipped upside down and all around, AIReal classes are a perfect integration of tradition and innovation. You will progress through a spectrum of postures, using the hammock as a prop for balance, and as a spotting device to safely guide you into postures you might have thought impossible to access. As you elevate your practice, the hammock will allow you to deepen stretches, lengthen and strengthen the entire body, and access a deeper state of relaxation. As you flow and fly freely in the body, you will free up the breath and slide into a stress-free state-of-mind. Bring on the mind, body, breath connection Wanderlusters!"
        }
      }]
    }
  })

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
