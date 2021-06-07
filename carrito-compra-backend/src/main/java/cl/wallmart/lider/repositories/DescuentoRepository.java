package cl.wallmart.lider.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import cl.wallmart.lider.entities.Descuento;


@Repository
public interface DescuentoRepository extends MongoRepository<Descuento , String>{

}
