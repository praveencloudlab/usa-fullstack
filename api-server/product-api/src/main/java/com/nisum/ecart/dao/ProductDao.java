package com.nisum.ecart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nisum.ecart.entity.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {}
