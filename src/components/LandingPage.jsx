import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import InfoBlock from './pages/InfoBlock.jsx';
import { Container, Row, Col, Image, Button, Navbar, Nav } from 'react-bootstrap';
import LogoVendup from '../public/vendup.png';
import Login from '../components/ModalLogin.jsx';
import Register from '../components/ModalRegister.jsx';
import logo from '../public/vendup.png';
import imgProduct from '../public/product.png';
import HeaderBlock from './pages/HeaderBlock.jsx';
import ProductBlock from './pages/ProductBlock.jsx';
import WaveBackground from './pages/WaveBackground.jsx';
import PlataformBlock from './pages/PlataformBlock.jsx';
import ItemsBlock from './pages/ItemsBlock.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ minHeight: '50px', top: '0' }}>
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoVendup} width="100" role="img" aria-label="Vendup" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Login className="me-2" onClose={() => setShowLoginModal(false)} />
            <Register className="me-2" onClose={() => setShowSignupModal(false)} />
          </Nav>
        </Container>
      </Navbar>

      {/* <WaveBackground /> */}

      <Container className="mt-5">
        <HeaderBlock
          title="Bienvenido a VENDUP"
          content="¡Bienvenido a nuestro sitio web de compraventa de productos entre particulares! En nuestro sitio, puede encontrar una amplia variedad de productos de segunda mano en excelentes condiciones a precios asequibles. Con nuestro fácil sistema de navegación, puede buscar fácilmente los productos que necesita y ponerse en contacto directamente con el vendedor para realizar la compra. Además, nuestro sitio está creado en React, lo que significa que disfrutará de una experiencia de usuario rápida y eficiente. ¡Explora nuestro sitio hoy y encuentra las mejores ofertas en productos de segunda mano!"
          src={logo}
        />

        <ProductBlock
          title="Compra y vende fácil y seguro"
          content="Compra y vende fácil y seguro en nuestra plataforma de compraventa entre particulares. Busca y encuentra lo que necesitas, contáctate con el vendedor y acuerda la entrega. Publica tus productos, describe su calidad y espera a que los compradores te contacten. Una opción excelente para comprar o vender productos de segunda mano. Explora nuestro sitio hoy."
          src={imgProduct}
        />

        <PlataformBlock
          title="Tecnologías modernas en nuestra plataforma"
          content="Nuestra plataforma es una aplicación web desarrollada utilizando una combinación de tecnologías modernas. Utilizamos Bootstrap como framework front-end para crear una interfaz de usuario responsive y adaptable. Cloudinary es nuestra solución de almacenamiento y entrega de imágenes que nos permite administrar y optimizar las imágenes de manera eficiente. JWT es nuestro método preferido de autenticación y autorización, lo que nos permite crear una experiencia de usuario personalizada y segura. Python es el lenguaje de programación que utilizamos para la parte backend de la plataforma, lo que nos permite construir una API REST robusta y escalable. React es nuestra librería de front-end preferida, que nos permite crear componentes reutilizables y una interfaz de usuario dinámica. Stripe es nuestra solución de pago, que nos permite procesar pagos de manera segura y eficiente. Por último, utilizamos Vite como nuestro bundler de desarrollo para compilar y optimizar nuestro código. En resumen, nuestra plataforma utiliza tecnologías modernas y poderosas para ofrecer una experiencia de usuario rápida, segura y escalable."
        />

        <Fade bottom>
          <div id="infoBlock1" className="mt-5">
            <InfoBlock
              title="Productos Premium"
              content="La etiqueta premium es una opción que te permite destacar tus productos en nuestra plataforma, de manera que se muestren en los primeros resultados de búsqueda y aumenten su visibilidad para los clientes potenciales. Al destacar tus productos con esta etiqueta, los clientes los verán primero al realizar una búsqueda en nuestra plataforma, lo que aumentará la posibilidad de que se interesen por ellos y los compren.
              Para destacar tus productos con la etiqueta premium, simplemente debes realizar un pago a través de Stripe, un sistema seguro y confiable de pagos en línea. Una vez que realices el pago, podrás agregar la etiqueta premium a tus productos y verás cómo aumentan su visibilidad en nuestra plataforma.
              No pierdas la oportunidad de destacar tus productos y aumentar tus ventas. ¡Haz que tus productos se destaquen con la etiqueta premium!"
            />
          </div>
          <ItemsBlock />
        </Fade>

        {/* <Fade bottom>
          <div id="infoBlock2">
            <InfoBlock
              title="Envíos rápidos"
              content="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa error reiciendis architecto nisi iure recusandae exercitationem totam, enim vitae. Iste, atque fugiat consequatur vel dolorem soluta voluptatem animi molestiae suscipit nobis obcaecati culpa similique provident nulla quibusdam, quas nisi, earum inventore at ullam vitae. Dolorem beatae minus asperiores alias nesciunt ab perspiciatis! Pariatur ducimus officiis, aut, expedita deleniti repudiandae id accusamus laborum quos nisi reprehenderit quae, voluptatibus et. Necessitatibus aspernatur non, quo nostrum hic voluptatibus sunt repellendus corporis ea temporibus ducimus distinctio, cupiditate accusamus doloremque quam eligendi dolor fugiat rerum. Ipsa ipsum dolor minima? Eaque recusandae quidem aliquam perspiciatis velit culpa explicabo dicta in eos voluptatem enim, sunt itaque voluptas illo doloribus molestiae soluta placeat repellendus obcaecati vel quis doloremque quod perferendis dolor? Perferendis quae at sed architecto enim porro, quis alias exercitationem nesciunt magnam autem a reiciendis! Officiis aperiam labore itaque consequuntur corrupti voluptates dolorem ipsum non nemo voluptas quia dicta voluptatem deleniti saepe perferendis fugiat eum sit nobis porro dignissimos, excepturi odit molestiae? Consequuntur veniam recusandae mollitia sunt nam odio tempore et doloribus illum, provident minima ipsum numquam hic sequi quae, modi quibusdam error nemo natus! Magnam, suscipit. Hic facilis cumque earum omnis placeat tempore fuga voluptatum ex laboriosam nihil. Eius asperiores qui consequuntur perferendis, et ab fugit ea blanditiis culpa illo facilis perspiciatis tempore dolor quod, commodi tenetur id, repellat explicabo laudantium doloremque tempora. Fuga, consectetur quibusdam dolorum, illo obcaecati fugit nihil dignissimos aliquam illum quas atque nobis consequatur impedit minus quam voluptatibus at dolore voluptas magni, nisi esse voluptates sequi? Quia eos, porro quisquam officia quaerat est, atque error, voluptatibus magni vero aut ut quae! Facere dolorem reiciendis pariatur asperiores quae optio repudiandae, illo exercitationem quia quam. Possimus doloribus animi alias ad eos eligendi voluptate. Qui illo eos explicabo ab suscipit ipsum, hic officiis, excepturi animi eaque aliquam! Dolorem, animi corrupti? Delectus magni dignissimos id error quo doloremque harum, sunt nobis ea dolorum repellat pariatur iusto! Maiores pariatur optio dicta doloremque aperiam recusandae, quidem blanditiis cum consequatur tenetur quibusdam, ipsam iure molestias quia officia dolor dolore nulla iste, beatae ducimus id dolorum voluptate repellendus! Eos cum dolore, voluptas quam ex eaque. Minima, repellendus! Itaque quod dicta sit autem debitis rerum. Quam necessitatibus accusantium soluta mollitia veniam nisi dolore ab sapiente cumque illo repellendus a nostrum fugit veritatis sed ratione minus repudiandae aut aspernatur suscipit consectetur ipsum, iusto cupiditate. Ipsa culpa in voluptate illo iusto repellat obcaecati distinctio adipisci nemo. Molestiae illo tempora sit accusamus numquam odio a eum sunt hic cum suscipit dolorum neque corrupti adipisci officia aliquam rem nostrum amet architecto esse laborum, consequatur cumque. Maiores similique officiis vitae sunt suscipit sed rerum unde praesentium repellat dolorem cumque ipsam ducimus omnis, vero commodi molestias harum ipsum nemo animi culpa doloremque laboriosam totam. Laboriosam recusandae impedit quod, nulla dolorem voluptas voluptates corporis quidem possimus consectetur ratione itaque? Eos ratione dignissimos numquam soluta quod possimus maiores iste voluptates at error sit labore distinctio velit, nam odio dolorem porro qui quasi laboriosam aliquam asperiores voluptatum! Aut, rem doloribus."
            />
          </div>
        </Fade>

        <Fade bottom>
          <div id="infoBlock3">
            <InfoBlock
              title="Atención al cliente"
              content="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa error reiciendis architecto nisi iure recusandae exercitationem totam, enim vitae. Iste, atque fugiat consequatur vel dolorem soluta voluptatem animi molestiae suscipit nobis obcaecati culpa similique provident nulla quibusdam, quas nisi, earum inventore at ullam vitae. Dolorem beatae minus asperiores alias nesciunt ab perspiciatis! Pariatur ducimus officiis, aut, expedita deleniti repudiandae id accusamus laborum quos nisi reprehenderit quae, voluptatibus et. Necessitatibus aspernatur non, quo nostrum hic voluptatibus sunt repellendus corporis ea temporibus ducimus distinctio, cupiditate accusamus doloremque quam eligendi dolor fugiat rerum. Ipsa ipsum dolor minima? Eaque recusandae quidem aliquam perspiciatis velit culpa explicabo dicta in eos voluptatem enim, sunt itaque voluptas illo doloribus molestiae soluta placeat repellendus obcaecati vel quis doloremque quod perferendis dolor? Perferendis quae at sed architecto enim porro, quis alias exercitationem nesciunt magnam autem a reiciendis! Officiis aperiam labore itaque consequuntur corrupti voluptates dolorem ipsum non nemo voluptas quia dicta voluptatem deleniti saepe perferendis fugiat eum sit nobis porro dignissimos, excepturi odit molestiae? Consequuntur veniam recusandae mollitia sunt nam odio tempore et doloribus illum, provident minima ipsum numquam hic sequi quae, modi quibusdam error nemo natus! Magnam, suscipit. Hic facilis cumque earum omnis placeat tempore fuga voluptatum ex laboriosam nihil. Eius asperiores qui consequuntur perferendis, et ab fugit ea blanditiis culpa illo facilis perspiciatis tempore dolor quod, commodi tenetur id, repellat explicabo laudantium doloremque tempora. Fuga, consectetur quibusdam dolorum, illo obcaecati fugit nihil dignissimos aliquam illum quas atque nobis consequatur impedit minus quam voluptatibus at dolore voluptas magni, nisi esse voluptates sequi? Quia eos, porro quisquam officia quaerat est, atque error, voluptatibus magni vero aut ut quae! Facere dolorem reiciendis pariatur asperiores quae optio repudiandae, illo exercitationem quia quam. Possimus doloribus animi alias ad eos eligendi voluptate. Qui illo eos explicabo ab suscipit ipsum, hic officiis, excepturi animi eaque aliquam! Dolorem, animi corrupti? Delectus magni dignissimos id error quo doloremque harum, sunt nobis ea dolorum repellat pariatur iusto! Maiores pariatur optio dicta doloremque aperiam recusandae, quidem blanditiis cum consequatur tenetur quibusdam, ipsam iure molestias quia officia dolor dolore nulla iste, beatae ducimus id dolorum voluptate repellendus! Eos cum dolore, voluptas quam ex eaque. Minima, repellendus! Itaque quod dicta sit autem debitis rerum. Quam necessitatibus accusantium soluta mollitia veniam nisi dolore ab sapiente cumque illo repellendus a nostrum fugit veritatis sed ratione minus repudiandae aut aspernatur suscipit consectetur ipsum, iusto cupiditate. Ipsa culpa in voluptate illo iusto repellat obcaecati distinctio adipisci nemo. Molestiae illo tempora sit accusamus numquam odio a eum sunt hic cum suscipit dolorum neque corrupti adipisci officia aliquam rem nostrum amet architecto esse laborum, consequatur cumque. Maiores similique officiis vitae sunt suscipit sed rerum unde praesentium repellat dolorem cumque ipsam ducimus omnis, vero commodi molestias harum ipsum nemo animi culpa doloremque laboriosam totam. Laboriosam recusandae impedit quod, nulla dolorem voluptas voluptates corporis quidem possimus consectetur ratione itaque? Eos ratione dignissimos numquam soluta quod possimus maiores iste voluptates at error sit labore distinctio velit, nam odio dolorem porro qui quasi laboriosam aliquam asperiores voluptatum! Aut, rem doloribus."
            />
          </div>
        </Fade>

        <Slide left>
          <div id="infoBlock4">
            <InfoBlock
              title="Métodos de pago seguros"
              content="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa error reiciendis architecto nisi iure recusandae exercitationem totam, enim vitae. Iste, atque fugiat consequatur vel dolorem soluta voluptatem animi molestiae suscipit nobis obcaecati culpa similique provident nulla quibusdam, quas nisi, earum inventore at ullam vitae. Dolorem beatae minus asperiores alias nesciunt ab perspiciatis! Pariatur ducimus officiis, aut, expedita deleniti repudiandae id accusamus laborum quos nisi reprehenderit quae, voluptatibus et. Necessitatibus aspernatur non, quo nostrum hic voluptatibus sunt repellendus corporis ea temporibus ducimus distinctio, cupiditate accusamus doloremque quam eligendi dolor fugiat rerum. Ipsa ipsum dolor minima? Eaque recusandae quidem aliquam perspiciatis velit culpa explicabo dicta in eos voluptatem enim, sunt itaque voluptas illo doloribus molestiae soluta placeat repellendus obcaecati vel quis doloremque quod perferendis dolor? Perferendis quae at sed architecto enim porro, quis alias exercitationem nesciunt magnam autem a reiciendis! Officiis aperiam labore itaque consequuntur corrupti voluptates dolorem ipsum non nemo voluptas quia dicta voluptatem deleniti saepe perferendis fugiat eum sit nobis porro dignissimos, excepturi odit molestiae? Consequuntur veniam recusandae mollitia sunt nam odio tempore et doloribus illum, provident minima ipsum numquam hic sequi quae, modi quibusdam error nemo natus! Magnam, suscipit. Hic facilis cumque earum omnis placeat tempore fuga voluptatum ex laboriosam nihil. Eius asperiores qui consequuntur perferendis, et ab fugit ea blanditiis culpa illo facilis perspiciatis tempore dolor quod, commodi tenetur id, repellat explicabo laudantium doloremque tempora. Fuga, consectetur quibusdam dolorum, illo obcaecati fugit nihil dignissimos aliquam illum quas atque nobis consequatur impedit minus quam voluptatibus at dolore voluptas magni, nisi esse voluptates sequi? Quia eos, porro quisquam officia quaerat est, atque error, voluptatibus magni vero aut ut quae! Facere dolorem reiciendis pariatur asperiores quae optio repudiandae, illo exercitationem quia quam. Possimus doloribus animi alias ad eos eligendi voluptate. Qui illo eos explicabo ab suscipit ipsum, hic officiis, excepturi animi eaque aliquam! Dolorem, animi corrupti? Delectus magni dignissimos id error quo doloremque harum, sunt nobis ea dolorum repellat pariatur iusto! Maiores pariatur optio dicta doloremque aperiam recusandae, quidem blanditiis cum consequatur tenetur quibusdam, ipsam iure molestias quia officia dolor dolore nulla iste, beatae ducimus id dolorum voluptate repellendus! Eos cum dolore, voluptas quam ex eaque. Minima, repellendus! Itaque quod dicta sit autem debitis rerum. Quam necessitatibus accusantium soluta mollitia veniam nisi dolore ab sapiente cumque illo repellendus a nostrum fugit veritatis sed ratione minus repudiandae aut aspernatur suscipit consectetur ipsum, iusto cupiditate. Ipsa culpa in voluptate illo iusto repellat obcaecati distinctio adipisci nemo. Molestiae illo tempora sit accusamus numquam odio a eum sunt hic cum suscipit dolorum neque corrupti adipisci officia aliquam rem nostrum amet architecto esse laborum, consequatur cumque. Maiores similique officiis vitae sunt suscipit sed rerum unde praesentium repellat dolorem cumque ipsam ducimus omnis, vero commodi molestias harum ipsum nemo animi culpa doloremque laboriosam totam. Laboriosam recusandae impedit quod, nulla dolorem voluptas voluptates corporis quidem possimus consectetur ratione itaque? Eos ratione dignissimos numquam soluta quod possimus maiores iste voluptates at error sit labore distinctio velit, nam odio dolorem porro qui quasi laboriosam aliquam asperiores voluptatum! Aut, rem doloribus."
            />
          </div>
        </Slide>

        <Slide right>
          <div id="infoBlock5">
            <InfoBlock
              title="Política de devolución"
              content="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa error reiciendis architecto nisi iure recusandae exercitationem totam, enim vitae. Iste, atque fugiat consequatur vel dolorem soluta voluptatem animi molestiae suscipit nobis obcaecati culpa similique provident nulla quibusdam, quas nisi, earum inventore at ullam vitae. Dolorem beatae minus asperiores alias nesciunt ab perspiciatis! Pariatur ducimus officiis, aut, expedita deleniti repudiandae id accusamus laborum quos nisi reprehenderit quae, voluptatibus et. Necessitatibus aspernatur non, quo nostrum hic voluptatibus sunt repellendus corporis ea temporibus ducimus distinctio, cupiditate accusamus doloremque quam eligendi dolor fugiat rerum. Ipsa ipsum dolor minima? Eaque recusandae quidem aliquam perspiciatis velit culpa explicabo dicta in eos voluptatem enim, sunt itaque voluptas illo doloribus molestiae soluta placeat repellendus obcaecati vel quis doloremque quod perferendis dolor? Perferendis quae at sed architecto enim porro, quis alias exercitationem nesciunt magnam autem a reiciendis! Officiis aperiam labore itaque consequuntur corrupti voluptates dolorem ipsum non nemo voluptas quia dicta voluptatem deleniti saepe perferendis fugiat eum sit nobis porro dignissimos, excepturi odit molestiae? Consequuntur veniam recusandae mollitia sunt nam odio tempore et doloribus illum, provident minima ipsum numquam hic sequi quae, modi quibusdam error nemo natus! Magnam, suscipit. Hic facilis cumque earum omnis placeat tempore fuga voluptatum ex laboriosam nihil. Eius asperiores qui consequuntur perferendis, et ab fugit ea blanditiis culpa illo facilis perspiciatis tempore dolor quod, commodi tenetur id, repellat explicabo laudantium doloremque tempora. Fuga, consectetur quibusdam dolorum, illo obcaecati fugit nihil dignissimos aliquam illum quas atque nobis consequatur impedit minus quam voluptatibus at dolore voluptas magni, nisi esse voluptates sequi? Quia eos, porro quisquam officia quaerat est, atque error, voluptatibus magni vero aut ut quae! Facere dolorem reiciendis pariatur asperiores quae optio repudiandae, illo exercitationem quia quam. Possimus doloribus animi alias ad eos eligendi voluptate. Qui illo eos explicabo ab suscipit ipsum, hic officiis, excepturi animi eaque aliquam! Dolorem, animi corrupti? Delectus magni dignissimos id error quo doloremque harum, sunt nobis ea dolorum repellat pariatur iusto! Maiores pariatur optio dicta doloremque aperiam recusandae, quidem blanditiis cum consequatur tenetur quibusdam, ipsam iure molestias quia officia dolor dolore nulla iste, beatae ducimus id dolorum voluptate repellendus! Eos cum dolore, voluptas quam ex eaque. Minima, repellendus! Itaque quod dicta sit autem debitis rerum. Quam necessitatibus accusantium soluta mollitia veniam nisi dolore ab sapiente cumque illo repellendus a nostrum fugit veritatis sed ratione minus repudiandae aut aspernatur suscipit consectetur ipsum, iusto cupiditate. Ipsa culpa in voluptate illo iusto repellat obcaecati distinctio adipisci nemo. Molestiae illo tempora sit accusamus numquam odio a eum sunt hic cum suscipit dolorum neque corrupti adipisci officia aliquam rem nostrum amet architecto esse laborum, consequatur cumque. Maiores similique officiis vitae sunt suscipit sed rerum unde praesentium repellat dolorem cumque ipsam ducimus omnis, vero commodi molestias harum ipsum nemo animi culpa doloremque laboriosam totam. Laboriosam recusandae impedit quod, nulla dolorem voluptas voluptates corporis quidem possimus consectetur ratione itaque? Eos ratione dignissimos numquam soluta quod possimus maiores iste voluptates at error sit labore distinctio velit, nam odio dolorem porro qui quasi laboriosam aliquam asperiores voluptatum! Aut, rem doloribus."
            />
          </div>
        </Slide>  */}
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
