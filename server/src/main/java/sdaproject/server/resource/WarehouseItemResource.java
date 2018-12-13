package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.service.ProductService;

@RestController
@RequestMapping("/api/warehouses")
public class WarehouseResource extends AbstractResource<ProductEntity, ProductDTO> {

    private final Logger log = LoggerFactory.getLogger(WarehouseResource.class);

    private final ProductService productService;

    public WarehouseResource(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public ProductService getService() {
        return productService;
    }

}
