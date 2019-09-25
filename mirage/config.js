export default function() {
  this.namespace = '/api';

  this.get('/services');
  this.get('/services/:id');
  this.get('/occurrences');
  this.get('/occurrences/:id');
  this.get('/consumers')
  this.get('/consumers/:id')
  this.post('/consumers', (schema, request) => {
    const resp = JSON.parse(request.requestBody).data.attributes
    const firstName = resp["first-name"]
    const lastName = resp["last-name"]
    const email = resp["email"];
    const password = resp["password"];

    return schema.consumers.create({ firstName, lastName, email, password });
  })
  this.post('/services', (schema, request) => {
    const resp = JSON.parse(request.requestBody).data.attributes
    const title = resp["title"]
    const duration = resp["duration"]
    const description = resp["description"]

    return schema.consumers.create({ title, duration, description });
  })
  this.post('/consumer-login', (schema, request) => {
    const resp = JSON.parse(request.requestBody)
    const email = resp.email;
    const password = resp.password;
    const foundConsumer = schema.consumers.findBy({email: email})

    if (foundConsumer && foundConsumer.attrs.password === password) {
      return {consumerId: foundConsumer.id}
    } else {
      return false
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
