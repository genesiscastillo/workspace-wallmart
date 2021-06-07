package cl.wallmart.lider.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cl.wallmart.lider.entities.Producto;
import cl.wallmart.lider.repositories.ProductoRepository;

@RestController
public class ProductoController {

	@Autowired
	private ProductoRepository productoRepository;

	@GetMapping("/products")
	@ResponseBody
	public List<Producto> findAll() {
		return productoRepository.findAll();
	}

}
