package cl.wallmart.lider.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cl.wallmart.lider.entities.Descuento;
import cl.wallmart.lider.repositories.DescuentoRepository;

@RestController
public class DescuentoController {

	
	@Autowired
	DescuentoRepository descuentoRepository;
	
	@GetMapping("/discounts")	
	@ResponseBody
	public List<Descuento> findAll() {
		return descuentoRepository.findAll();
	}
	
}
