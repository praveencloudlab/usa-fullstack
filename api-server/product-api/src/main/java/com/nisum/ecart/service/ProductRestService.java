package com.nisum.ecart.service;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nisum.ecart.dao.ProductDao;
import com.nisum.ecart.entity.Product;

@RestController
@CrossOrigin("*")
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
	
	@GetMapping("/{id}")
	public Product findById(@PathVariable("id") Integer id) {
		System.out.println(">>>>>> ID::: "+id+" <<<<<<<<<<<<<<");
		return prodDao.findById(id).orElse(null);
	}
	
	
	@PutMapping("/{id}")
	public Product updateById(@PathVariable("id")int id,@RequestBody Product product) {
		
		Product p1=prodDao.findById(id).orElse(null);
		product.setId(id);
		
		if(p1!=null) {
			System.out.println(">>>> ID: "+id);
			System.out.println(">>>> product "+p1);
			return prodDao.save(product);
		}
		return null;
	}
	@PutMapping
	public Product update(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") int id) {
		prodDao.deleteById(id);
		//return new ResponseEntity<>("Product ID "+id+" deleted",HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
