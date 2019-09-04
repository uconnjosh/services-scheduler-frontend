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

  const occurrence1 = server.create('occurrence', {
  	service: service1,
  	slots: 4
  })
}
