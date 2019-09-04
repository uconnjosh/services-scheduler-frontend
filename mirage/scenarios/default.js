export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('service', 3);
  // server.loadFixtures('services');
  // server.createList('occurrence', 4, { service: services[0]})
  const service1 = server.create('service', {
  	title: "Flow Basics (Level 1)",
  	duration: "75",
  	description: "These Level 1 classes are perfect for those that are brand new to yoga, new to flow style yoga, or coming back from a hiatus or injury. Classes include both flow and static postures, and though they don’t move quickly, students should come prepared to MOVE!",
  	images: [
  		{
        src: "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
    	}
    ]
  })

  const service2 = server.create('service', {
    title: "Flow Basics (Level 2)",
    duration: "90",
    description: "Vinyasa (or flow) style yoga with an emphasis on creativity and alignment. Classes are inventive and thoughtful sequences of sun salutations, standing & seated postures, back bending and inversions - guided by a steady breath to tone and calm the mind.",
  })

  const service3 = server.create('service', {
    title: "AIREAL YOGA: ELEVATE, EXHILARATE, ALLEVIATE",
    duration: "60",
    description: "Dive deeper into your yoga practice. Explore a heightened experience of inner and out space. Expand the boundaries of the mind-body-breath connection. Based on classical Hatha Yoga, but flipped upside down and all around, AIReal classes are a perfect integration of tradition and innovation. You will progress through a spectrum of postures, using the hammock as a prop for balance, and as a spotting device to safely guide you into postures you might have thought impossible to access. As you elevate your practice, the hammock will allow you to deepen stretches, lengthen and strengthen the entire body, and access a deeper state of relaxation. As you flow and fly freely in the body, you will free up the breath and slide into a stress-free state-of-mind. Bring on the mind, body, breath connection Wanderlusters!",
  })

  server.create('occurrence', {
  	service: service1,
    starts() {
      const dt = new Date()
      dt.setHours(dt.getHours() + Math.floor(Math.random() * 36))
      return dt
    },
  	slots: 10
  })

  server.create('occurrence', {
    service: service1,
    starts() {
      const dt = new Date()
      dt.setHours(dt.getHours() + Math.floor(Math.random() * 36))
      return dt
    },
    slots: 5
  })

  server.create('occurrence', {
    service: service2,
    starts: new Date(),
    slots: 2 
  })
}
