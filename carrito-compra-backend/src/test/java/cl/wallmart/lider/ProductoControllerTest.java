package cl.wallmart.lider;

import static java.util.Collections.singletonList;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import cl.wallmart.lider.controller.DescuentoController;
import cl.wallmart.lider.controller.ProductoController;
import cl.wallmart.lider.entities.Producto;
import cl.wallmart.lider.repositories.DescuentoRepository;
import cl.wallmart.lider.repositories.ProductoRepository;

@ExtendWith(SpringExtension.class)
@WebMvcTest(DescuentoController.class)
public class ProductoControllerTest {

	@Autowired
	private MockMvc mvc;

	@MockBean
	private ProductoController productoController;

	@MockBean
	private DescuentoRepository descuentoRepository;

	@MockBean
	private ProductoRepository productoRepository;  

	@Test
	public void testingAllProductos() throws Exception {
	
		Producto producto = new Producto();
		producto.setBrand("Marca1");
		
		List<Producto> productos = singletonList(producto);
		
		given( productoController.findAll() ).willReturn(productos);
		
		mvc.perform(get("/products")
				.contentType(APPLICATION_JSON))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(1)))
				.andExpect(jsonPath("$[0].brand", is(producto.getBrand())));
		
	}

}
