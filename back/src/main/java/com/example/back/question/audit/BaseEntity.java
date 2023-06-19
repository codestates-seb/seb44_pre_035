package com.example.back.question.audit;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public abstract class BaseEntity {
    @CreatedDate
    @Column(updatable = false, name = "created_at")
    private LocalDateTime createdAt;

    @Setter
    @LastModifiedDate
    @Column(name = "modified_at")
    private LocalDateTime modifiedAt;
}
