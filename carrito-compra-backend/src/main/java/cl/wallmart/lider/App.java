package cl.wallmart.lider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;

import cl.wallmart.lider.repositories.DescuentoRepository;
import cl.wallmart.lider.repositories.ProductoRepository;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
public class App implements CommandLineRunner {

	@Autowired
	ProductoRepository productoRepository;
	@Autowired
	DescuentoRepository descuentoRepository;

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		descuentoRepository.findAll().forEach(System.out::println);
		System.out.println("-----------------------------------");
		productoRepository.findAll().forEach(System.out::println);
	}
	
 @Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2)
        .select()
        // .apis(RequestHandlerSelectors.any())
        .apis(RequestHandlerSelectors.basePackage("cl.wallmart.lider.controller"))
        .paths(PathSelectors.any())
        .build();
  }
}
