import mongoose from "mongoose";
import _ from "lodash";
import { DBURL } from "../../config";
import Faq from "../models/Faq";
import Rutas from "../models/Rutas";
import Socios from "../models/Socios";

(async () => {
  mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await Rutas.collection.drop();
    await Socios.collection.drop();
    await Faq.collection.drop();
  } catch (error) {
    console.log("COLLECTION NOT FOUND");
  }
 
  const createFaq = await Faq.create([
    {
      question:`¿Cuanto cuesta la cuota anual de socio?`,
      answer: `la cuota anual son 20 euros`
    },
    {
      question:`¿Como puedo adquirir productos de la asociación?`,
      answer: `Hay que hacerlos bajo pedido a la directiva`
    },
    {
      question:`¿Es necesario tener una scooter para unirse?`,
      answer: `No, en este grupo juntamos motos de diferentes marcas y tipos`
    },
    {
      question:`¿A que se destina el importe de la cuota de socio?`,
      answer: `La finalidad de este importe es por y para los miembros; cenas, chaquetas, pegatinas...`
    }
  ]);

  const createRuta = await Rutas.create([
    {
      name: `Ruta 001`,
      day: `15 de noviembre`,
      duration: `850`,
    },
    {
      name: `Ruta 002`,
      day: `16 de mayo`,
      duration: `500`,
    },
    {
      name: `Ruta 003`,
      day: `21 de agosto`,
      duration: `2000`,
    },
    {
      name: `Ruta 004`,
      day: `16 de febrero`,
      duration: `745`,
    }
  ]);
  

  const idSocio = await Socios.findOne().then((e) => {
    return e?._id;
  });

  const createSocios = await Socios.create([
    {
      name: `Adrián`,
      surname: `Jiménez Olivo`,
      dni: `70429545A`,
      birthday: `1996-11-15`,
      roadType: `Plaza`,
      address: `Mayor,5 bajo A`,
      postalCode: `28802`,
      town: `Alcalá de Henares`,
      province: `Madrid`,
      phoneNumber: `612345678`,
      email: `1234@gmail.com`,
      motocycle: `kawasaki`,
      role: `directiva`
    },
    {
      name: `Francisco`,
      surname: `Fernández Blázquez`,
      dni: `70429545H`,
      birthday: `1998-06-21`,
      roadType: `Calle`,
      address: `Mayor,8`,
      postalCode: `19162`,
      town: `Pioz`,
      province: `Guadalajara`,
      phoneNumber: `612345671`,
      email: `1235@gmail.com`,
      motocycle: `bmw`,
    },
    {
      name: `Teo`,
      surname: `Díaz`,
      dni: `12346578B`,
      birthday: `1989-08-08`,
      roadType: `Calle`,
      address: `Sierra Albarracín, 1`,
      postalCode: `19162`,
      town: `Pioz`,
      province: `Guadalajara`,
      phoneNumber: `612345671`,
      email: `1235@gmail.com`,
      motocycle: `Suzuki`,
    },
    {
      name: `Juan Manuel`,
      surname: `Jiménez Cabanillas`,
      dni: `12346578T`,
      birthday: `1972-05-16`,
      roadType: `Calle`,
      address: `Sierra Albarracín, 8`,
      postalCode: `19162`,
      town: `Pioz`,
      province: `Guadalajara`,
      phoneNumber: `612345671`,
      email: `1235@gmail.com`,
      motocycle: `Piaggio`,
    },
  ])

  mongoose.disconnect();
})();