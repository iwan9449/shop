package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.dto.WarehouseDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.entity.WarehouseEntity;

@Component
public class WarehouseConverter implements Converter<WarehouseEntity, WarehouseDTO> {

    private final ProductConverter productConverter;

    public WarehouseConverter(ProductConverter productConverter) {
        this.productConverter = productConverter;
    }

    @Override
    public WarehouseEntity convertToEntity(WarehouseDTO dto) {
        WarehouseEntity entity = new WarehouseEntity();

        entity.setId(dto.getId());
        entity.setQuantity(dto.getQuantity());
        entity.setPrice(dto.getPrice());
        entity.setProduct(productConverter.convertToEntity(dto.getProduct()));

        return entity;
    }

    @Override
    public WarehouseDTO convertToDto(WarehouseEntity entity) {
        WarehouseDTO dto = new WarehouseDTO();

        dto.setId(entity.getId());
        dto.setQuantity(entity.getQuantity());
        dto.setPrice(entity.getPrice());
        dto.setProduct(productConverter.convertToDto(entity.getProduct()));

        return dto;
    }
}
