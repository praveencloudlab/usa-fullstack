package com.nisum.ecart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nisum.ecart.dao.ProductDao;
import com.nisum.ecart.entity.Product;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductRestService {
	
	@Autowired
	private ProductDao prodDao;
	
	@GetMapping
	public List<Product> findAll() {
		return prodDao.findAll();
	}
	
	@PostMapping
	public Product save(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	

}
