package com.ual.rickymorty.repository;

import com.ual.rickymorty.entity.FavChar;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface FavCharRepository extends CrudRepository<FavChar, Long>{
    public List<FavChar> findByNameContainingIgnoreCase(@Param("name") String name);
}
