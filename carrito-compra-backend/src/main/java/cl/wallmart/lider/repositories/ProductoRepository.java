package cl.wallmart.lider.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import cl.wallmart.lider.entities.Producto;

@Repository
public interface ProductoRepository extends MongoRepository<Producto, Long>{

}
