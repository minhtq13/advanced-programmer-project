package com.example.btlltnc.Base;


import com.example.btlltnc.Utils.ResourceNotFoundException;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
public abstract class BaseController<Entity extends BaseModel, Repository extends BaseRepository> {
    public abstract Repository get();

    @GetMapping
    public Iterable<Entity> getAll(){
        return get().findAll();
    }

    @SneakyThrows
    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable(value = "id") Long entityId)
            throws ResourceNotFoundException {
        Object entity = get().findById(entityId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found for this id :: " + entityId));
        return ResponseEntity.ok().body(entity);
    }

    @PostMapping
    public Entity create(@RequestBody Entity entity){
        return (Entity) get().save(entity);
    }

    @SneakyThrows
    @PutMapping("/{id}")
    public ResponseEntity<Entity> updateEmployee(@PathVariable(value = "id") Long entityId,
                                                 @RequestBody Entity entityDetails) throws ResourceNotFoundException {
        Entity entity = (Entity) get().findById(entityId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found for this id :: " + entityId));
        entityDetails.setId(entity.getId());
        final Entity updatedEntity = (Entity) get().save(entityDetails);
        return ResponseEntity.ok(updatedEntity);
    }

    @SneakyThrows
    @DeleteMapping("/{id}")
    public Map<String, Boolean> delete(@PathVariable(value = "id") Long entityId)
            throws ResourceNotFoundException {
        Entity entity = (Entity)get().findById(entityId)
                .orElseThrow(() -> new ResourceNotFoundException("Users not found for this id :: " + entityId));

        get().delete(entity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
